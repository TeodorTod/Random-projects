"use client";

import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
    const session = useSession();
    const { status } = session;

    if (status === 'loading') {
        return 'Loading...'
    };

    if (status === 'unauthenticated') {
        return redirect('/login')
    }

    const userImage = session.data.user.image

    return (
        <section className='mt-8'>
            <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
            <form className='max-w-md mx-auto'>
                <div className="flex gap-4 items-center">
                    <div>
                        <div className="p-2 rounded-lg flex flex-col items-center gap-2 w-46">
                            <Image
                                className="rounded-lg w-full"
                                src={userImage}
                                alt="userimage"
                                width={80}
                                height={64}
                            />
                            <button
                                type="button"
                                className="w-full rounded-md py-1"
                            >
                                Change avatar
                            </button>
                        </div>
                    </div>
                    <div className="grow">
                        <input
                            type="text"
                            placeholder="First and last name"
                            className="border p-2 rounded-md w-full mb-2"
                        />
                        <input
                            type="email"
                            value={session.data.user.email}
                            disabled={true}
                        />
                        <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded-md">
                            Save
                        </button>
                    </div>
                </div>

            </form>
        </section>
    )
}

export default page