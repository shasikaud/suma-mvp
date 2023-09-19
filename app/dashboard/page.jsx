'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Dashboard = () => {
  const { data: session } = useSession();
  if (!session) redirect('/login')
  return (
    <div className="flex flex-col w-full bg-slate-50 p-4 g-2">
      <div className='mb-2'>
        {`Dashboard / ${session?.user?.companyName}`}
      </div>
      <h1 className='text-xl mb-2'>{`Hello ${session?.user?.firstName}! Welcome to the SUMA Platform.`}</h1>
      <h1>Next Steps</h1>
      <h2>Complete the carbon footprint calculation for one selected year</h2>
      <Link href='/calculator' className="flex justify-center text-slate-50 w-56 bg-orange-400 p-1 rounded-md mt-4 text-center">Start Carbon Accounting</Link>
    </div> 
  )
}

export default Dashboard