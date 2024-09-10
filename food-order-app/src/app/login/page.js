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
    
        const res = await signIn('credentials', { email, password, redirect: false });
        setLoginInProgress(false);
    
        if (res.error) {
            console.log("Login error:", res.error);
        } else if (res.ok) {
            // Optionally handle successful login (redirect, etc.)
            console.log("Login successful!");
            // You can now manually redirect to another page if needed
            window.location.href = res.url || '/';  // You can set this to your desired redirect route
        }
    };
    
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
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    className="flex gap-4 justify-center" type="button"
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