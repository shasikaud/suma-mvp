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
        <div className='flex flex-row bg-blue-200 gap-4 p-4'>
            <Link href='/dashboard'>Dashboard</Link>
            <Link href='/calculator'>Calculator</Link>
            <button onClick={()=>signOut()} className='bg-red-300'>Sign Out</button>
        </div>
    )
}

export default NavigationBar