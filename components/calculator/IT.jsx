'use client'


const IT = ({ user, updateUserData }) => {

  const useCloud = user?.data?.useCloud;
  const btnColorYes = (useCloud === 'NOT-DEFINED') ? '' : (useCloud === 'YES') ? 'bg-primary border-white' : 'bg-white'
  const btnColorNo = (useCloud === 'NOT-DEFINED') ? '' : (useCloud === 'YES') ? 'bg-white' : 'bg-primary border-white'

  return (
    <div className="flex flex-col bg-backgroundColor ml-[265px] px-8 h-full">
      <h1 className="text-2xl mb-10">Cloud Services</h1>
      <div className="flex flex-col py-8 justify-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200 mb-4">
        <h3 className="font-semibold">Do you use cloud services such as AWS, Google Cloud or Microsoft Azure</h3>
        <div className="flex flex-row">
          <button className={`rounded-full px-4 py-2 text-sm m-2 border-2 font-semibold border-gray-200 transition ${btnColorYes}`} 
                  onClick={()=>{updateUserData('useCloud', 'YES')}}>
                    Yes
          </button>
          <button className={`rounded-full px-4 py-2 text-sm m-2 border-2 font-semibold border-gray-200 transition ${btnColorNo}`} 
                  onClick={()=>{updateUserData('useCloud', 'NO')}}>
                    No
          </button>
        </div>
      </div>

      {(useCloud === 'YES') ? 
        <div className="bg-white flex flex-col gap-4 py-8 justify-center px-10 rounded-xl border-2 border-gray-200 mb-4">
          <h3 className="font-semibold">Select your cloud service provider</h3>
          <div className="flex flex-col mr-auto">
            <div className="flex flex-row items-center rounded-xl px-6 py-3 border-2 border-black mb-4">
              <p className="font-medium">Amazon Web Services</p>
              <img src="assets/aws-logo.svg" alt="Amazon Web Services Logo" className="h-6 ml-4"/>
            </div>
            <p className="mb-4">AWS Carbon Footprint</p>
            <input className="border-gray-200 rounded-md border-2 p-2"
              type="number"
              name="awsCarbonFootprint"
              placeholder="Amount in CO2"
              value={user?.data?.awsFootprint}
              onChange={(e)=>{updateUserData('awsFootprint', Number(e.target.value))}}
            ></input>
          </div>

          <div className="flex flex-col">
            <p>Google Cloud</p>
            <p>Google Cloud carbon footprint</p>
            <input
              type="number"
              name="gcpCarbonFootprint"
              placeholder="Amount in CO2"
              value={user?.data?.gcpFootprint}
              onChange={(e)=>{updateUserData('gcpFootprint', Number(e.target.value))}}
            ></input>
          </div>

          <div className="flex flex-col">
            <p>Azure</p>
            <p>Azure Carbon Footprint</p>
            <input
              type="number"
              name="azureCarbonFootprint"
              placeholder="Amount in CO2"
              value={user?.data?.azureFootprint}
              onChange={(e)=>{updateUserData('azureFootprint', Number(e.target.value))}}
            ></input>
          </div>

        </div>
       : <></>}

      <div className="flex flex-row justify-end my-10">
        <button 
          className="bg-primary text-white rounded-xl px-4 py-2" 
          onClick={e => {updateUserData('state', 'ELECTRONICS', 'IT', true)}}>
            Continue
        </button>
      </div>

    </div>
  )
}

export default IT