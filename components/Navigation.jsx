'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const NavigationBar = () => {
    const { data: session } = useSession();
    if (session) return <h1>Navigation Bar</h1>
    return <></>
}

export default NavigationBar