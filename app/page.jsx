'use client'

import { useSession, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'

const Home = () => {
  const { data: session } = useSession();
  if (!session) redirect('/login');
  return (
    <div>
      Home Page You Are Signed In!
      <button onClick={()=>signOut()}>Sign Out</button>
    </div>
  )
}

export default Home
