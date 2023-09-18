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
    <>
      <div className="flex flex-col bg-gray-300">
        <h1>Company Overview</h1>
        <p>The CarbonBOT calculator will use financial data and utilize our own calculation formulas built based on GHG Protocol standards to calculate your business’s carbon footprint. It applies region and industry-level economic data to your operations. Going through the calculation process should take less than an hour depending on what information you have available.</p>
      </div>

      <div className="flex flex-col bg-gray-400">
        <h2>Company Name</h2>
        <h3>Company registered in Finland</h3>
        <button className="flex flex-col bg-red-400">Change Details</button>
      </div>

      <div className="flex flex-col bg-gray-500">
        <h2>Business Sector</h2>
        <select onChange={e => {updateUserData('businessSector', e.target.value)}} value={user?.data?.businessSector}>
          {
            businessSectors.map((sector, index) => {
              return (<option key={index}>{sector}</option>)
            })
          }
        </select>
      </div>

      <div className="flex flex-col bg-gray-500">
        <h2>Select calendar year to measure</h2>
        <select>
          {
            yearsToMeasure.map((year, index) => {
              return (<option key={index}>{year}</option>)
            })
          }
        </select>
      </div>

      <button className="bg-red-100" onClick={e => {updateUserData('state', 'OFFICES')}}>Continue</button>
    </>
  )
}

export default CompanyOverview