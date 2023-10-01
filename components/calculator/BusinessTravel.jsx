'use client'

const BusinessTravel = ({ user, updateUserData }) => {

  if (!user?.data) return <LoadingScreenSecondary/>
  
  return (
    <div className="ml-[265px] px-8 h-full bg-backgroundColor">
      <h1 className="text-2xl pt-10 pb-8">Business Travel</h1>

      <div className="flex flex-col py-8 justify-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200 mb-4">
        <p className="font-semibold mb-2">How many one-way flights do your employees take annually for business purpose?</p>

        <p>Short-haul flights (flight time up to 3 hours):</p>
        <input className="border-gray-200 rounded-md border-2 p-2 mb-8"
              type="number" 
              min="0"
              value={user?.data?.shortHaulFlights} 
              onChange={(e)=>{updateUserData('shortHaulFlights', Number(e.target.value))}}>
        </input>

        <p>Medium-haul-flights (flight time between 3 and 6 hours):</p>
        <input className="border-gray-200 rounded-md border-2 p-2 mb-8"
              type="number" 
              min="0"
              value={user?.data?.mediumHaulFlights} 
              onChange={(e)=>{updateUserData('mediumHaulFlights', Number(e.target.value))}}>
        </input>

        <p>Long-haul flights (flight time of over 6 hours):</p>
        <input className="border-gray-200 rounded-md border-2 p-2 mb-4"
              type="number" 
              min="0"
              value={user?.data?.longHaulFlights} 
              onChange={(e)=>{updateUserData('longHaulFlights', Number(e.target.value))}}>
        </input>
      </div>

      <div className="flex flex-row justify-end mt-10">

        <button 
          className="bg-primary text-slate-50 rounded-lg px-4 py-2" 
          onClick={e => {updateUserData('state', 'BLOCKCHAIN', 'BUSINESS_TRAVEL', true)}}>
          Continue
        </button>
        
      </div>

    </div>
  )
}

export default BusinessTravel