'use client'

import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Home = () => {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? 
        (<></>)
        :
        ( <h2>Signin to SUMA to view the exciting features!</h2> )
      }
    </>
  )
}

export default Home

{/* <>
      <h2>Welcome to the SUMA platform!</h2>
      <h3>Log in to view the features!</h3>
    </> */}