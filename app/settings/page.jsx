'use client'

import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

import { deleteUser, getUserByEmail } from '@/utils/apiCalls';

const Settings = () => {

    const { data: session } = useSession();
    if (!session || !session.user) redirect('/login')

    const [user, setUser] = useState({});

    useEffect(() => {
        const temp = async(email) => {
          const user = await getUserByEmail(email);
          if (user) setUser(user);
        }
        temp(session?.user?.email);
    }, []);

    const updateUserData = async(key, value) => {
        const kv = { [key]: value };
        const updatedUser = { ...user, ...kv };
        setUser(updatedUser);
    }

    const deleteAccount = async() => {
        const success = await deleteUser(user?.email);
        if (success) signOut();
    }

    return (
        <div className="ml-[265px] flex flex-col p-8 gap-4">

            <h1 className="text-2xl">Settings</h1>

            <div className="border-2 w-64 flex flex-col gap-2">
                <h1>Company</h1>
                <div className='flex flex-row gap-4'>
                    <h1>Name</h1>
                    <h1>{user?.companyName}</h1>
                </div>
            </div>

            <div className="border-2 w-64 flex flex-col gap-2">
                <h1>Profile</h1>
                <div className='flex flex-row gap-4'>
                    <h1>Name</h1>
                    <h1>{`${user?.firstName} ${user?.lastName}`}</h1>
                </div>
                <div className='flex flex-row gap-4'>
                    <h1>Email</h1>
                    <h1>{user?.email}</h1>
                </div>
            </div>

            <button className='bg-primary text-white rounded-xl w-32' onClick={()=>signOut()}>
                Log out
            </button>

            <div className='bg-secondary flex flex-col'>
                <h1>Delete your user account and all related data</h1>
                <button className='bg-primary text-white rounded-xl w-32 bg-red-500' onClick={deleteAccount}>
                    Delete Account
                </button>
            </div>


        </div>
    )
}

export default Settings