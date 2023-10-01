'use client'

import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

import CompanyOverview from '@/components/calculator/CompanyOverview';
import Start from '@/components/calculator/start';
import { getUserByEmail, getUserByUserName, updateUserData as updateUserDataDB } from '@/utils/apiCalls';
import Offices from '@/components/calculator/offices';
import IT from '@/components/calculator/IT';
import Commuting from '@/components/calculator/Commuting';
import NavigationCard from '@/components/calculator/utils/NavigationCard';
import BusinessTravel from '@/components/calculator/BusinessTravel';
import Electronics from '@/components/calculator/Electronics';
import Blockchain from '@/components/calculator/Blockchain';
import Summary from '@/components/calculator/Summary';


const Calculator = () => {

  console.log(`rendering calculator comp`)

  const { data: session } = useSession();
  if (!session || !session.user) redirect('/login')

  const [user, setUser] = useState({});
  const currentState = user?.data?.state;

  useEffect(() => {
    const temp = async(email) => {
      const user = await getUserByEmail(email);
      // console.log(user);
      if (user) setUser(user);
    }
    temp(session?.user?.email);
  }, []);

  const updateUserData = async(key, value, completedState, save) => {
    // console.log(`Updating userData ${key} - ${value} - ${completedState} - ${save}`);
    const kv = { [key]: value };
    const data = { ...user.data, ...kv }
    const updatedUser = { ...user, data }
    if (completedState) {
      // console.log(`completed state: ${completedState}`)
      const completedStates = updatedUser.data.completedStates;
      if (!completedStates.includes(completedState)) {
        completedStates.push(completedState);
        // console.log(`updating completed state: ${completedStates}`)
        // const kv = { [key]: value };
        // const data = { ...user.data, ...kv }
        // const updatedUser = { ...user, data }
      }
    } 
      if (save) await updateUserDataDB(updatedUser);
      setUser(updatedUser)
      // console.log(updatedUser);
  }


  if (currentState === 'CREATED') return <Start updateUserData={updateUserData}/>
  if (currentState === 'SUMMARY') return <Summary user={user}/>

  return (
    <div className='flex flex-col w-full'>

      <div className='bg-white py-4 pl-8 ml-[265px]'>
        <p className='text-semibold '>Carbon Footprint Calculator</p>
      </div>

      <div className="flex flex-row w-full h-screen">

        <div className='w-9/12 h-full'>
          {(currentState === 'COMPANY_OVERVIEW') ? <CompanyOverview user={user} updateUserData={updateUserData}/> : <></>}
          {(currentState === 'OFFICES') ? <Offices user={user} updateUserData={updateUserData}/> : <></>}
          {(currentState === 'IT') ? <IT user={user} updateUserData={updateUserData}/> : <></>}
          {(currentState === 'ELECTRONICS') ? <Electronics user={user} updateUserData={updateUserData}/> : <></>}
          {(currentState === 'COMMUTING') ? <Commuting user={user} updateUserData={updateUserData}/> : <></>}
          {(currentState === 'BUSINESS_TRAVEL') ? <BusinessTravel user={user} updateUserData={updateUserData}/> : <></>}
          {(currentState === 'BLOCKCHAIN') ? <Blockchain user={user} updateUserData={updateUserData}/> : <></>}

        </div>

        <div className='flex flex-col w-3/12 gap-2 bg-slate-50 pr-8'>
          <NavigationCard 
            index={'1'} 
            active={currentState === 'COMPANY_OVERVIEW'} 
            text={'Company Overview'} 
            completed={user?.data?.completedStates.includes('COMPANY_OVERVIEW')}
            id='COMPANY_OVERVIEW'
            updateUserData={updateUserData}
          />
          <NavigationCard 
            index={'2'} 
            active={currentState === 'OFFICES'} 
            text={'Offices'} 
            completed={user?.data?.completedStates.includes('OFFICES')}
            id='OFFICES'
            updateUserData={updateUserData}
          />
          <NavigationCard 
            index={'3'} 
            active={currentState === 'IT'} 
            text={'Cloud Services'} 
            completed={user?.data?.completedStates.includes('IT')}
            id='IT'
            updateUserData={updateUserData}
          />
          <NavigationCard 
            index={'4'} 
            active={currentState === 'ELECTRONICS'} 
            text={'Electronics & Devices'} 
            completed={user?.data?.completedStates.includes('ELECTRONICS')}
            id='ELECTRONICS'
            updateUserData={updateUserData}
          />
          <NavigationCard 
            index={'5'} 
            active={currentState === 'COMMUTING'} 
            text={'Employee Commuting'} 
            completed={user?.data?.completedStates.includes('COMMUTING')}
            id='COMMUTING'
            updateUserData={updateUserData}
          />
          <NavigationCard 
            index={'6'} 
            active={currentState === 'BUSINESS_TRAVEL'} 
            text={'Business Travel'} 
            completed={user?.data?.completedStates.includes('BUSINESS_TRAVEL')}
            id='BUSINESS_TRAVEL'
            updateUserData={updateUserData}
          />
          <NavigationCard 
            index={'7'} 
            active={currentState === 'BLOCKCHAIN'} 
            text={'Blockchain Transactions'} 
            completed={user?.data?.completedStates.includes('BLOCKCHAIN')}
            id='BLOCKCHAIN'
            updateUserData={updateUserData}
          />
        </div>
        
    </div>
  </div>
  )
}

export default Calculator