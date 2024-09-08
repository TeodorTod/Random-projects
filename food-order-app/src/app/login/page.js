"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginInProgress, setLoginInProgress] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoginInProgress(true);

        await signIn('credentials', { email, password })

        setLoginInProgress(false);
    }
    return (
        <section className='mt-8'>
            <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loginInProgress}
                    name="email"
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loginInProgress}
                    name="password"
                />
                <button type="submit" disabled={loginInProgress}>
                    Login
                </button>
                <div className="my-4 text-center text-gray-400">
                    or login with provider
                </div>
                <button
                    // onClick={() => signIn('google', { callbackUrl: '/' })}
                    className="flex gap-4 justify-center"
                >
                    <Image src={"/google.png"} alt={""} width={24} height={24} />
                    Login with google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Not having an accout?{' '}
                    <Link className="underline" href={'/register'}>Register here &raquo;</Link>
                </div>
            </form>
        </section>
    )
}

export default LoginPage