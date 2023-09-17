'use client'

import { useSession, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'

const Home = () => {
  const { data: session } = useSession();
  if (!session) redirect('/login');
  redirect('/dashboard');
}

export default Home
