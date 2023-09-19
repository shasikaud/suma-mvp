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
import Commuting from '@/components/calculator/Commuting';


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
    <div className="flex flex-row w-full">
      {(currentState === 'CREATED') ? <Start updateUserData={updateUserData}/> : <></>}
      {(currentState === 'COMPANY_OVERVIEW') ? <CompanyOverview user={user} updateUserData={updateUserData}/> : <></>}
      {(currentState === 'OFFICES') ? <Offices user={user} updateUserData={updateUserData}/> : <></>}
      {(currentState === 'IT') ? <IT user={user} updateUserData={updateUserData}/> : <></>}
      {(currentState === 'COMMUTING') ? <Commuting user={user} updateUserData={updateUserData}/> : <></>}

      {(currentState !== 'CREATED') ? 
        (
          <ul className='flex flex-col w-80 m-2 p-2 bg-slate-50'>
            <li className={currentState === 'COMPANY_OVERVIEW' ? "bg-green-100" : "bg-red-100"}>1. Company Overview</li>
            <li className={currentState === 'OFFICES' ? "bg-green-100" : "bg-red-100"}>2. Offices</li>
            <li className={currentState === 'IT' ? "bg-green-100" : "bg-red-100"}>3. Cloud Services & IT</li>
            <li className={currentState === 'COMMUTING' ? "bg-green-100" : "bg-red-100"}>4. Employee Comuting</li>
          </ul>
        )
        : <></>
      }

  </div>
  )
}

export default Calculator