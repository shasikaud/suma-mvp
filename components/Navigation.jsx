'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const NavigationBar = () => {
    const { data: session } = useSession();
    if (!session) return <></>
    return (
        <div className='flex flex-col w-2/12 h-full space-between text-center bg-orange-200 gap-1 p-1'>
            <h1>SUMA</h1>
            <Link href='/dashboard'>Dashboard</Link>
            <Link href='/calculator'>Calculator</Link>
            <h1>{session?.user?.companyName}</h1>
            <button onClick={()=>signOut()} className='bg-red-300'>Sign Out</button>
        </div>
    )
}

export default NavigationBar