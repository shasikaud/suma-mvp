'use client'

const Electronics = ({ user, updateUserData }) => {
  return (
    <div className="flex flex-col">
        <h1>Electronics & Devices</h1>
        
        <div>
            <h1>How many laptops your company provided on 2022?</h1>
            <input 
                type="number"
                placeholder="0"
                value={user?.data?.laptopCount}
                onChange={(e) => {updateUserData('laptopCount', Number(e.target.value))}}
            >
            </input>
        </div>

        <div>
            <h1>How many desktop computers your company provided on 2022?</h1>
            <input 
                type="number"
                placeholder="0"
                value={user?.data?.desktopCount}
                onChange={(e) => {updateUserData('desktopCount', Number(e.target.value))}}
            >
            </input>
        </div>

        <div>
            <h1>How many mobile phones your company provided on 2022?</h1>
            <input 
                type="number"
                placeholder="0"
                value={user?.data?.mobileCount}
                onChange={(e) => {updateUserData('mobileCount', Number(e.target.value))}}
            >
            </input>
        </div>

        <div>
            <h1>How many desktop screens/TVs your company provided on 2022?</h1>
            <input 
                type="number"
                placeholder="0"
                value={user?.data?.screenCount}
                onChange={(e) => {updateUserData('screenCount', Number(e.target.value))}}
            >
            </input>
        </div>

        <button 
            className="bg-red-100" 
            onClick={e => {updateUserData('state', 'COMMUTING', 'ELECTRONICS', true)}}>
          Continue
        </button>

    </div>
  )
}

export default Electronics