'use client'

const BusinessTravel = ({ user, updateUserData }) => {
  return (
    <div>

      <h1>How many one-way flights do your employees take annually for business purpose?</h1>

      <h1>Short-haul flights (flight time up to 3 hours):</h1>
      <input 
            type="number" 
            value={user?.data?.shortHaulFlights} 
            onChange={(e)=>{updateUserData('shortHaulFlights', Number(e.target.value))}}>
      </input>

      <h1>Medium-haul-flights (flight time between 3 and 6 hours):</h1>
      <input 
            type="number" 
            value={user?.data?.mediumHaulFlights} 
            onChange={(e)=>{updateUserData('mediumHaulFlights', Number(e.target.value))}}>
      </input>

      <h1>Long-haul flights (flight time of over 6 hours):</h1>
      <input 
            type="number" 
            value={user?.data?.longHaulFlights} 
            onChange={(e)=>{updateUserData('longHaulFlights', Number(e.target.value))}}>
      </input>

      <div className="flex flex-row justify-end mt-4">
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