'use client'

import { BiCheck } from "react-icons/bi";

const NavigationCard = ({ index, active, text, completed, updateUserData, id }) => {

  const bgColor = active ? 'bg-orange-200' : completed ? 'bg-primary' : 'bg-slate-200';

  const handleClick = ()=> {
    if (completed) updateUserData('state', id);
  }

  return (
    <div 
      className={`flex flex-row p-2 rounded-xl gap-2 ${bgColor}`} 
      onClick={handleClick}
    >
        <div className="w-11/12 flex flex-row gap-2">
          <h1 className="w-6 h-6 bg-slate-50 rounded-full flex justify-center items-center">{index}</h1> 
          <h1>{text}</h1>
        </div>
        
        {completed ? <BiCheck color="white" size={26}/> : <></>}
    </div>
  )
}

export default NavigationCard