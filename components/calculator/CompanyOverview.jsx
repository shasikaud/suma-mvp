'use client'

const CompanyOverview = ({ user, updateUserData }) => {

  const businessSectors = [
    'Tech consultancy / development for clients',
    'Software-as-a-service',
    'Cloud services',
    'Blockchain network'
  ] 

  const yearsToMeasure = [
    '2022'
  ]

  return (
    <div className="bg-slate-100 p-4 h-full">

      <h1 className="text-2xl">Company Overview</h1>
      <p className="my-2">Measuring with carbon footprint calculator will use financial data and utilize our own calculation formulas built based on GHG Protocol standards to calculate your business’s carbon footprint. It applies region and industry-level economic data to your operations. Going through the calculation process should take less than an hour depending on what information you have available.</p>

      <div className="flex flex-row justify-between bg-slate-50 p-4 my-2">
        <h2 className="font-semibold">{user?.companyName}</h2>
        {/* <h3>Company registered in Finland</h3> */}
        <button className="flex flex-col rounded-lg border-2 border-orange-400 p-2 text-orange-400">Change Details</button>
      </div>

      <div className="flex flex-col bg-slate-50 p-4 gap-2">
        <h2 className="font-medium">Business Sector</h2>
        <select onChange={e => {updateUserData('businessSector', e.target.value)}} 
          className="border-slate-500 border-2"
          placeholder="Select your business sector"
          value={user?.data?.businessSector}>
          {
            businessSectors.map((sector, index) => {
              return (<option key={index}>{sector}</option>)
            })
          }
        </select>
      </div>

      <div className="flex flex-col bg-slate-50 p-4 gap-2">
        <h2 className="font-medium">Select calendar year to measure</h2>
        <select className="border-slate-500 border-2">
          {
            yearsToMeasure.map((year, index) => {
              return (<option key={index}>{year}</option>)
            })
          }
        </select>
      </div>

      <div className="flex flex-col bg-slate-50 p-4 gap-2">
        <h2 className="font-medium">How many full time equivalent employees does your company have?</h2>
        <h3>You can calculate part-time employees as: e.g. four 50% positions amounting to 2 full time employees.</h3>
        <input 
          name="fullTimeEmployees"
          onChange={(e)=>{updateUserData('fullTimeEmployees', Number(e.target.value))}}
        >
        </input>
      </div>

      <div className="flex flex-row justify-end mt-4">
        <button className="bg-green-500 text-slate-50 rounded-lg px-4 py-2" onClick={e => {updateUserData('state', 'OFFICES')}}>Continue</button>
      </div>

      <button onClick={e => {updateUserData('states.COMPANY_OVERVIEW', 'ACTIVE')}}>Test</button>
      
    </div>
  )
}

export default CompanyOverview