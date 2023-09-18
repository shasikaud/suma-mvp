'use client'


const IT = ({ user, updateUserData }) => {

  const usingCloudServices = user?.data?.usingCloudServices;
  const usingInHouseServers = user?.data?.usingInHouseServers;

  return (
    <div className="flex flex-col bg-blue-100">

      <div className="flex flex-row">
        <h1>Do you use cloud services such as AWS, Google Cloud or Microsoft Azure</h1>
        <button className={usingCloudServices ? "bg-green-500" : "bg-slate-300"} 
                onClick={()=>{updateUserData('usingCloudServices', true)}}>
                  Yes
        </button>
        <button className={!usingCloudServices ? "bg-green-500" : "bg-slate-300"} 
                onClick={()=>{updateUserData('usingCloudServices', false)}}>
                  No
        </button>
      </div>

      <div className="flex flex-row">
        <h1>Do you host any servers in-house?</h1>
        <button className={usingInHouseServers ? "bg-green-500" : ""} 
                onClick={()=>{updateUserData('usingInHouseServers', true)}}>
                  Yes
        </button>
        <button className={!usingInHouseServers ? "bg-green-500" : ""} 
                onClick={()=>{updateUserData('usingInHouseServers', false)}}>
                  No
        </button>
      </div>

      <div className="flex flex-row bg-yellow-200">
        <h1>How many laptops your company provided in 2022? </h1>
        <input 
          type="number" 
          // value={user?.data?.laptopCount} 
          // placeholder={user?.data?.laptopCount}
          onChange={(e)=>{updateUserData('laptopCount', Number(e.target.value))}}>
        </input>
      </div>

      <div className="flex flex-row bg-yellow-300">
        <h1>How many desktop computers your company provided in 2022? </h1>
        <input type="number" onChange={(e)=>{updateUserData('desktopCount', Number(e.target.value))}}></input>
      </div>

      <div className="flex flex-row bg-yellow-400">
        <h1>How many desktop screens/TVs your company provided in 2022? </h1>
        <input type="number" onChange={(e)=>{updateUserData('screenCount', Number(e.target.value))}}></input>
      </div>

      <button className="bg-red-100" onClick={e => {updateUserData('state', 'COMMUTING')}}>Continue</button>

    </div>
  )
}

export default IT