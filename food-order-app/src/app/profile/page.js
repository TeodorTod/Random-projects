"use client";

import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast";

const page = () => {
    const session = useSession();
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState(session?.data?.user?.name || '');
    const { status } = session;

    
  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/profile').then(response => {
        response.json().then(data => {
          setUser(data);
          setIsAdmin(data.admin);
          setProfileFetched(true);
        })
      });
    }
  }, [session, status]);

    if (status === 'loading') {
        return 'Loading...'
    };

    if (status === 'unauthenticated') {
        return redirect('/login')
    }

    const userImage = session.data.user.image

    const handleProfileInfoUpdate = async (e, data) => {
        e.preventDefault();

        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok)
                resolve()
            else
                reject();
        });

        await toast.promise(savingPromise, {
            loading: 'Saving...',
            success: 'Profile saved!',
            error: 'Error!',
        });
    }

    return (
        <section className='mt-8'>
            <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
            <div className='max-w-md mx-auto'>
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
                    <form className="grow" onSubmit={handleProfileInfoUpdate}>
                        <input
                            type="text"
                            placeholder="First and last name"
                            className="border p-2 rounded-md w-full mb-2"
                            value={userName} onChange={e => setUserName(e.target.value)}
                        />
                        <input
                            type="email"
                            value={session.data.user.email}
                            disabled={true}
                        />
                        <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded-md">
                            Save
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default page