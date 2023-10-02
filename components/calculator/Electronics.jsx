'use client'

const Electronics = ({ user, updateUserData }) => {
    
    if (!user?.data) return <LoadingScreenSecondary/>

  return (
    <div className="flex flex-col h-full ml-[265px] px-8 bg-backgroundColor">
        <h1 className="text-2xl pt-10 pb-8">Electronics & Devices</h1>
        
        <div className="flex flex-col py-8 justify-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200 mb-4">
            <h3 className="font-semibold">How many laptops your company provided on 2022?</h3>
            <input className="border-gray-200 rounded-md border-2 p-2"
                type="number"
                min="0"
                value={user?.data?.laptopCount}
                onChange={(e) => {updateUserData('laptopCount', Number(e.target.value))}}
            >
            </input>
        </div>

        <div className="flex flex-col py-8 justify-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200 mb-4">
            <h3 className="font-semibold">How many desktop computers your company provided on 2022?</h3>
            <input className="border-gray-200 rounded-md border-2 p-2"
                type="number"
                min="0"
                value={user?.data?.desktopCount}
                onChange={(e) => {updateUserData('desktopCount', Number(e.target.value))}}
            >
            </input>
        </div>

        <div className="flex flex-col py-8 justify-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200 mb-4">
            <h3 className="font-semibold">How many mobile phones your company provided on 2022?</h3>
            <input className="border-gray-200 rounded-md border-2 p-2"
                type="number"
                min="0"
                value={user?.data?.mobileCount}
                onChange={(e) => {updateUserData('mobileCount', Number(e.target.value))}}
            >
            </input>
        </div>

        <div className="flex flex-col py-8 justify-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200 mb-4">
            <h3 className="font-semibold">How many desktop screens/TVs your company provided on 2022?</h3>
            <input className="border-gray-200 rounded-md border-2 p-2"
                type="number"
                min="0"
                value={user?.data?.screenCount}
                onChange={(e) => {updateUserData('screenCount', Number(e.target.value))}}
            >
            </input>
        </div>

        <div className="flex flex-row justify-end my-10">

            <button 
                className="bg-white text-primary border-2 border-primary rounded-xl px-4 py-2" 
                onClick={e => {updateUserData('state', 'IT')}}>
                Previous
            </button>

            <button 
                className="bg-primary text-white rounded-xl px-4 py-2" 
                onClick={e => {updateUserData('state', 'COMMUTING', 'ELECTRONICS', true)}}>
            Continue
            </button>

        </div>

    </div>
  )
}

export default Electronics