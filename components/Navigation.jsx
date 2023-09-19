'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation';

const NavigationBar = () => {

    const path = usePathname();

    const { data: session } = useSession();
    if (!session) return <></>

    return (
        <div className='flex flex-col w-2/12 h-full space-between text-center bg-slate-50 gap-1 p-1 border-r-4'>
            <h1 className='text-3xl font-bold my-4'>SU<span className='text-orange-400'>MA</span></h1>
            <Link href='/dashboard' className={path==='/dashboard' ? 'bg-slate-200 rounded' : ''}>
                Dashboard
            </Link>
            <Link href='/calculator' className={path==='/calculator' ? 'bg-slate-200 rounded' : ''}>Calculator</Link>
            <h1 className='mt-72'>{session?.user?.companyName}</h1>
            <button onClick={()=>signOut()} className='bg-red-100 hover:bg-red-400'>Sign Out</button>
        </div>
    )
}

export default NavigationBar