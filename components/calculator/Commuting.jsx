'use client'

const Commuting = ({ user, updateUserData }) => {
  return (
    <div>

        <div className="flex flex-col bg-yellow-200">
            <h1>Employee Commuting</h1>

            <div className="flex flex-row bg-yellow-100">
                <h1>What percentage of your employees work from home (approximately) </h1>
                <input 
                    type="number" 
                    // value={user?.data?.laptopCount} 
                    // placeholder={user?.data?.laptopCount}
                    onChange={(e)=>{updateUserData('wfhEmployeePerct', Number(e.target.value))}}>
                </input>
            </div>

            <div className="flex flex-row bg-yellow-100">
                <h1>Average number of working days per year </h1>
                <input 
                    type="number" 
                    // value={user?.data?.laptopCount} 
                    // placeholder={user?.data?.laptopCount}
                    onChange={(e)=>{updateUserData('workingDaysAvg', Number(e.target.value))}}>
                </input>
            </div>
        </div>

        <div className="flex flex-col bg-yellow-400">
            <h1>Mode of transportation</h1>
            <h2>Percentages used each mode</h2>

            <div className="flex flex-row bg-yellow-100">
                <h1>Walk, bike or electric scooter %</h1>
                <input 
                    type="number" 
                    // value={user?.data?.laptopCount} 
                    // placeholder={user?.data?.laptopCount}
                    onChange={(e)=>{updateUserData('walkBikeScooterPerct', Number(e.target.value))}}>
                </input>
            </div>

            <div className="flex flex-row bg-yellow-100">
                <h1>Train % </h1>
                <input 
                    type="number" 
                    // value={user?.data?.laptopCount} 
                    // placeholder={user?.data?.laptopCount}
                    onChange={(e)=>{updateUserData('trainPerct', Number(e.target.value))}}>
                </input>
            </div>

            <div className="flex flex-row bg-yellow-100">
                <h1>Daily one-way distance between home and work (average) km</h1>
                <input 
                    type="number" 
                    // value={user?.data?.laptopCount} 
                    // placeholder={user?.data?.laptopCount}
                    onChange={(e)=>{updateUserData('dailyDistanceHomeWorkTrain', Number(e.target.value))}}>
                </input>
            </div>

            <div className="flex flex-row bg-yellow-100">
                <h1>Bus % </h1>
                <input 
                    type="number" 
                    // value={user?.data?.laptopCount} 
                    // placeholder={user?.data?.laptopCount}
                    onChange={(e)=>{updateUserData('busPerct', Number(e.target.value))}}>
                </input>
            </div>

            <div className="flex flex-row bg-yellow-100">
                <h1>Daily one-way distance between home and work (average) km</h1>
                <input 
                    type="number" 
                    // value={user?.data?.laptopCount} 
                    // placeholder={user?.data?.laptopCount}
                    onChange={(e)=>{updateUserData('dailyDistanceHomeWorkBus', Number(e.target.value))}}>
                </input>
            </div>

            <div className="flex flex-row bg-yellow-100">
                <h1>Personal Car % </h1>
                <input 
                    type="number" 
                    // value={user?.data?.laptopCount} 
                    // placeholder={user?.data?.laptopCount}
                    onChange={(e)=>{updateUserData('carPerct', Number(e.target.value))}}>
                </input>
            </div>

            <div className="flex flex-row bg-yellow-100">
                <h1>Daily one-way distance between home and work (average) km</h1>
                <input 
                    type="number" 
                    // value={user?.data?.laptopCount} 
                    // placeholder={user?.data?.laptopCount}
                    onChange={(e)=>{updateUserData('dailyDistanceHomeWorkCar', Number(e.target.value))}}>
                </input>
            </div>
            
        </div>

    </div>
  )
}

export default Commuting