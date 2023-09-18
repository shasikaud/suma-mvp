'use client'

import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

import CompanyOverview from '@/components/calculator/CompanyOverview';
import Start from '@/components/calculator/start';
import { getUserByUserName, updateUserData as updateUserDataDB } from '@/utils/apiCalls';
import Offices from '@/components/calculator/offices';
import IT from '@/components/calculator/IT';
import { useRouter } from 'next/router';


const Calculator = () => {
  const { data: session } = useSession();
  if (!session || !session.user) redirect('/login')

  const [user, setUser] = useState(session.user);
  const currentState = user?.data?.state;

  useEffect(() => {
  }, []);

  const updateUserData = async(key, value) => {
    console.log(`Updating ${key} - ${value}.`);
    const kv = { [key]: value };
    const data = { ...user.data, ...kv }
    const updatedUser = { ...user, data }
    await updateUserDataDB(updatedUser);
    setUser(updatedUser)
  }

  return (
    <div className="flex flex-row">
      <div className="bg-blue-400">Calculator Section</div>
      {(currentState === 'STARTED') ? <Start updateUserData={updateUserData}/> : 
        (
          <ul className='flex flex-col bg-blue-500'>
            <li>1. Company Overview</li>
            <li>2. Offices</li>
            <li>3. Cloud Services & IT</li>
          </ul>
        )
      }
      
      {(currentState === 'COMPANY_OVERVIEW') ? <CompanyOverview user={user} updateUserData={updateUserData}/> : <></>}
      {(currentState === 'OFFICES') ? <Offices user={user} updateUserData={updateUserData}/> : <></>}
      {(currentState === 'IT') ? <IT user={user} updateUserData={updateUserData}/> : <></>}

  </div>
  )
}

export default Calculator