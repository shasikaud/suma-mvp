'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const NavigationBar = () => {
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);

    useEffect( () => {
        const temp = async() => {
            const resp = await getProviders();
            setProviders(resp);
        };
        temp();
    }, []);

    return (
        <nav className='bg-blue-300'>
            {session?.user ? 
                (
                    <>  
                        <Image src={session?.user.image} width={40} height={40} alt='profile'/>
                        <button type='button' onClick={signOut}>Sign Out</button>
                        <br/>
                        <Link href='/dashboard'>Dashboard</Link> <br/>
                        <Link href='/calculator'>Calculator</Link> <br/>
                    </>
                ) 
                : 
                (<>
                    {providers && Object.values(providers).map(provider => {
                        return (
                            <button type='button' key={provider.name} onClick={() => signIn(provider.id)}>
                                Sign In
                            </button>
                        )
                    })}
                </>)
            }
        </nav>
    )
}

export default NavigationBar