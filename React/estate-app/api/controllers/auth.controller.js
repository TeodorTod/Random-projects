import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        //hash pass
        const hashedPassword = await bycript.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        });
        console.log(newUser);
        res.status(201).json({ message: "User created successfuly!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to create an user!" })

    }

};

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // CHECK IF THE USER EXISTS

        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) return res.status(400).json({ message: "Invalid Credentials!" });

        // CHECK IF THE PASSWORD IS CORRECT

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid)
            return res.status(400).json({ message: "Invalid Credentials!" });

        const age = 1000 * 3600 * 24 * 7;
        const token = jwt.sign({
            id: user.id
        },
            process.env.JWT_SECRET_KEY, {
            expiresIn: age
        });

        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
            maxAge: age
        }).status(200).json({ message: "Login successful!" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to login!" })
    }
};

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({message: "Logout successfull"});
}