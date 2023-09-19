'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Dashboard = () => {
  const { data: session } = useSession();
  if (!session) redirect('/login')
  return (
    <div className="w-full bg-yellow-100">
      <div>
        {`Dashboard / ${session?.user?.companyName}`}
      </div>
      <h1>{`Hello ${session?.user?.firstName}! Welcome to the SUMA Platform.`}</h1>
      <h1>Next Steps</h1>
      <h2>Complete the carbon footprint calculation for one selected year</h2>
      <Link href='/calculator' className="bg-red-300 p-1 rounded-md">Start Carbon Accounting</Link>
    </div> 
  )
}

export default Dashboard