'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Dashboard = () => {

  const { data: session } = useSession();
  if (!session) redirect('/login')

  const state = session?.user?.data?.state;
  const buttonText = (!state) ? 'Start Now' : (state === 'SUMMARY') ? 'View Summary' : 'Continue';

  return (
    <div className="ml-[265px] flex flex-col w-full bg-slate-50 px-8 g-2">

      <div className='py-5'>
        <h3>Dashboard</h3>
      </div>

      <h1 className='font-semibold text-2xl mt-8 mb-2'>{`Hello ${session?.user?.firstName}! Welcome to the SUMA Platform.`}</h1>
      <h1 className="text-xl mt-4 mb-4">Next Step</h1>

      <div className='flex flex-col border-2 w-3/12 p-8 rounded-lg'>
        <h1 className='border-2 rounded-md border-primary text-primary px-3 py-1 inline-block mr-auto mb-8'>Beta</h1>
        <h1 className='font-semibold text-lg'>Carbon Footprint Calculator</h1>
        <h1 className='mb-4 text-primary font-bold text-xs'>For tech and blockchain companies</h1>
        <h2 className='text-sm'>Calculate your company’s carbon footprint with our beta app.</h2>
        <Link href='/calculator' className="flex justify-center text-slate-50 bg-primary px-6 py-3 rounded-xl mt-6 mr-auto text-center transition hover:bg-primaryHover">{buttonText}</Link>
      </div>

  </div>   
  )
}

export default Dashboard