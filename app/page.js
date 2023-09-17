'use client'

import LoginForm from '@/components/loginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/dist/server/api-utils';
import { authOptions } from './api/auth/[...nextauth]/route';


const Home = () => {
  return (
    <div className='flex bg-blue-300'>
      <LoginForm/>
    </div>
  )
}

export default Home
