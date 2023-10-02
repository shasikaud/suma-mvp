'use client'

import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { Suspense } from 'react';

import { deleteUser, getUserByEmail } from '@/utils/apiCalls';
import LoadingScreenSecondary from '@/components/loading/LoadingScreenSecondary';

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

    if (!user?.data) return <LoadingScreenSecondary/>

    return (
        <div className="ml-[265px] flex flex-col p-8 gap-4 ">

            <h1 className="text-2xl">Settings</h1>

            <div className="border-2 flex flex-col gap-2 rounded-lg py-6 px-8">
                <h3 className="font-semibold">Company</h3>
                <div className='flex flex-row gap-4'>
                    <p className="text-sm font-medium">Company name</p>
                    <Suspense fallback={<div>Loading...</div>}>
                        <p className="text-sm">{user?.companyName}</p>
                    </Suspense>
                </div>
            </div>

            <div className="border-2 flex flex-col gap-2 rounded-lg py-6 px-8">
                <h3 className="font-semibold">Profile</h3>
                <div className='flex flex-row gap-4'>
                    <p className="text-sm font-medium">Name</p>
                    <p className="text-sm">{`${user?.firstName} ${user?.lastName}`}</p>
                </div>
                <div className='flex flex-row gap-4'>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm">{user?.email}</p>
                </div>
            </div>

            <button className='bg-primary text-white rounded-lg py-2 px-6 mr-auto mt-6' onClick={()=>signOut()}>
                Sign out
            </button>

            <div className='bg-secondary flex flex-row py-6 px-8 rounded-lg mt-10'>
                <div className="flex flex-col">
                <div className="flex flex-row items-center gap-4">
                    <img src="../assets/warning-icon.svg" alt="warning icon" className="w-[50px]"/>
                    <h1>Delete your user account and all related data</h1>
                </div>
                <button className='bg-primary text-white rounded-lg py-2 px-6 mr-auto mt-6 ml-16 bg-red-500' onClick={deleteAccount}>
                    Delete account
                </button>
                </div>
            </div>


        </div>
    )
}

export default Settings