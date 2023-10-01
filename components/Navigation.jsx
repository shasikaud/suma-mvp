'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation';
import LoadingScreen from './loading/LoadingScreen'

const NavigationBar = () => {

    const path = usePathname();

    const { data: session } = useSession();
    if (!session) return <></>

    if (!session?.user?.data) return <LoadingScreen/>

    return (
        <div className='fixed top-0 left-0 z-10 flex flex-col flex-shrink-0 w-width265 h-full overflow-y-auto space-between text-grayBlue bg-white px-4 pt-4 border-r-2 text-sm'>
                <img src="assets/suma-logo.svg" alt="SUMA Logo" className="my-4 ml-4 max-w-[120px] h-auto" />

            {/* Session username and company name */}
            <div className='flex flex-col items-start mb-6 mt-4 py-4 border-t-2 border-b-2 border-gray-200'>
                <p className='px-4 font-semibold'>{session?.user?.companyName}</p>
                <p className="px-4">{session?.user?.firstName + " " + session?.user?.lastName}</p>
            </div>

            <div>
                <Link href='/dashboard' className={`py-2 flex gap-3 px-4 mb-2 ${path === '/dashboard' ? 'bg-slate-200 rounded font-semibold' : ''}`}>
                <img src="assets/dashboard-icon.svg" alt='Dashboard Icon' className='inline-block mr-2'/>Dashboard</Link>
            </div>
            
            <div>
                <Link href='/calculator' className={`py-2 flex gap-3 px-4 mb-2 ${path === '/calculator' ? 'bg-slate-200 rounded font-semibold' : ''}`}>
                <img src='assets/calculator-icon.svg' alt='Calculator Icon' className='inline-block mr-2' />Calculator</Link>
            </div>

            <div>
                <Link href='/settings' className={`py-2 flex gap-3 px-4 mb-2 ${path === '/settings' ? 'bg-slate-200 rounded font-semibold' : ''}`}>
                <img src='assets/settings-icon.svg' alt='Settings Icon' className='inline-block mr-2' />Settings</Link>
            </div> 

            <button onClick={()=>signOut()} className='bg-red-100 hover:bg-red-400 mt-auto mb-8 rounded-md py-2'>Sign Out</button>
        </div>
    )
}

export default NavigationBar