'use client'


const IT = ({ user, updateUserData }) => {

  const useCloud = user?.data?.useCloud;
  const btnColorYes = (useCloud === 'NOT-DEFINED') ? '' : (useCloud === 'YES') ? 'bg-primary' : 'bg-secondary'
  const btnColorNo = (useCloud === 'NOT-DEFINED') ? '' : (useCloud === 'YES') ? 'bg-secondary' : 'bg-primary'

  return (
    <div className="flex flex-col bg-blue-100">

      <div className="flex flex-col">
        <h1>Do you use cloud services such as AWS, Google Cloud or Microsoft Azure</h1>
        <div className="flex flex-row">
          <button className={btnColorYes} 
                  onClick={()=>{updateUserData('useCloud', 'YES')}}>
                    Yes
          </button>
          <button className={btnColorNo} 
                  onClick={()=>{updateUserData('useCloud', 'NO')}}>
                    No
          </button>
        </div>
      </div>

      {(useCloud === 'YES') ? 
        <div className="bg-yellow-200 flex flex-col gap-4">

          <div className="bg-yellow-100 flex flex-col">
            <h1>AWS</h1>
            <h1>AWS Carbon Footprint</h1>
            <input
              type="number"
              name="awsCarbonFootprint"
              placeholder="Amount in CO2"
              value={user?.data?.awsFootprint}
              onChange={(e)=>{updateUserData('awsFootprint', Number(e.target.value))}}
            ></input>
          </div>

          <div className="bg-yellow-100 flex flex-col">
            <h1>GCP</h1>
            <h1>GCP Carbon Footprint</h1>
            <input
              type="number"
              name="gcpCarbonFootprint"
              placeholder="Amount in CO2"
              value={user?.data?.gcpFootprint}
              onChange={(e)=>{updateUserData('gcpFootprint', Number(e.target.value))}}
            ></input>
          </div>

          <div className="bg-yellow-100 flex flex-col">
            <h1>Azure</h1>
            <h1>Azure Carbon Footprint</h1>
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

      
      <button 
        className="bg-red-100" 
        onClick={e => {updateUserData('state', 'ELECTRONICS', 'IT', true)}}>
          Continue
      </button>

    </div>
  )
}

export default IT