'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Dashboard = () => {
  const { data: session } = useSession();
  if (!session) redirect('/login')
  return (
    <>
      <div className="flex flex-col bg-blue-400">Dashboard Section</div>
      <div className="flex flex-col bg-blue-500">
        <Link href='/calculator' className="flex flex-col bg-red-300">Start Carbon Accounting</Link>
      </div>
    </>
    
  )
}

export default Dashboard