import { User } from "@/models/User";
import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "../../../libs/mongoConnect";

const handler = NextAuth({
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(client),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            id: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "test@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const email = credentials?.email;
                const password = credentials?.password;

                await mongoose.connect(process.env.MONGO_URL);
                const user = await User.findOne({ email });
                if (user && bcrypt.compareSync(password, user.password)) {
                    return user;
                }
                return null;
            }
        })
    ],
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, 
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user._id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        }
    },
    debug: true
});

export { handler as GET, handler as POST }
