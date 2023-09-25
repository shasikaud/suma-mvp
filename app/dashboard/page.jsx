'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Dashboard = () => {
  const { data: session } = useSession();
  if (!session) redirect('/login')
  return (
    <div className="flex flex-col w-full bg-slate-50 p-4 g-2">

      <div className='mb-2'>Dashboard</div>
      <h1 className='text-xl mb-2'>{`Hello ${session?.user?.firstName}! Welcome to the SUMA Platform.`}</h1>
      <h1>Next Step</h1>

      <div className='border-2 border-secondary rounded-md p-4 m-4 w-80'>
        <h1 className='text-primary border-2 rounded-md w-12 text-center border-primary my-4'>Beta</h1>
        <h1 className='font-bold text-xl'>Carbon Footprint Calculator</h1>
        <h1 className='font-semibold text-primary'>For tech and blockchain companies</h1>
        <h2 className='mt-2 text-sm'>Calculate your company’s carbon footprint with our beta app.</h2>
        <Link href='/calculator' className="flex justify-center w-24 text-slate-50 bg-primary p-1 rounded-xl mt-4 text-center">Start Now</Link>
      </div>

    </div> 
  )
}

export default Dashboard