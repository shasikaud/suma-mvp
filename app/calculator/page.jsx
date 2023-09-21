'use client'

import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

import CompanyOverview from '@/components/calculator/CompanyOverview';
import Start from '@/components/calculator/start';
import { getUserByEmail, getUserByUserName, updateUserData as updateUserDataDB } from '@/utils/apiCalls';
import Offices from '@/components/calculator/offices';
import IT from '@/components/calculator/IT';
import { useRouter } from 'next/router';
import Commuting from '@/components/calculator/Commuting';
import NavigationCard from '@/components/calculator/utils/NavigationCard';


const Calculator = () => {

  console.log(`rendering calculator comp`)

  const { data: session } = useSession();
  if (!session || !session.user) redirect('/login')

  const [user, setUser] = useState({});
  const currentState = user?.data?.state;

  // console.log(`currentState: ${currentState}`);
  // console.log(`userState: ${user?.data?.state}`)

  useEffect(() => {
    const temp = async(email) => {
      const user = await getUserByEmail(email);
      // console.log(user);
      if (user) setUser(user);
    }
    temp(session?.user?.email);
  }, []);

  const updateUserData = async(key, value) => {
    console.log(`Updating userData ${key} - ${value}.`);
    const kv = { [key]: value };
    const data = { ...user.data, ...kv }
    const updatedUser = { ...user, data }
    await updateUserDataDB(updatedUser);
    setUser(updatedUser)
  }

  if (currentState === 'CREATED') return <Start updateUserData={updateUserData}/>


  return (
    <div className="flex flex-row w-full bg-slate-100">

      <div className='w-9/12'>
        {(currentState === 'COMPANY_OVERVIEW') ? <CompanyOverview user={user} updateUserData={updateUserData}/> : <></>}
        {(currentState === 'OFFICES') ? <Offices user={user} updateUserData={updateUserData}/> : <></>}
        {(currentState === 'IT') ? <IT user={user} updateUserData={updateUserData}/> : <></>}
        {(currentState === 'COMMUTING') ? <Commuting user={user} updateUserData={updateUserData}/> : <></>}
      </div>

      <div className='flex flex-col w-3/12 mt-4 mx-4 gap-2'>
        <NavigationCard index={'1'} state={currentState === 'COMPANY_OVERVIEW'} text={'Company Overview'} />
        <NavigationCard index={'2'} state={currentState === 'OFFICES'} text={'Offices'} />
        <NavigationCard index={'3'} state={currentState === 'IT'} text={'Cloud Services & IT'} />
        <NavigationCard index={'4'} state={currentState === 'COMMUTING'} text={'Employee Commuting'} />
      </div>
      
  </div>
  )
}

export default Calculator