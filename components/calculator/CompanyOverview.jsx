'use client'

const CompanyOverview = ({ user, updateUserData }) => {

  // ADD HERE THE FOLLOWING BUSINESS SECTORS:
    // 'Fintech',
    // 'Blockchain & Cryptocurrency',
    // 'Saas (Software-as-a-Service',
    // 'AI & ML',
    // 'HealthTech',
    // 'EduTech',
    // 'E-commerce',
    // 'Gaming',
    // 'CleanTech & Energy',
    // 'Cybersecurity',
    // 'Cloud Computing & IT Infrastructure',
    // 'Media & Entertainment Tech'


  const businessSectors = [
    'Tech consultancy / development for clients',
    'Software-as-a-service',
    'Cloud services',
    'Blockchain network'
  ] 

  // Add the following years to measure:
  // 2022, 2021, 2020, 2019, 2018

  const yearsToMeasure = [
    '2022'
  ]

  // const disabled = user?.data?.fullTimeEmployees;

  return (
    <div className="ml-[265px] px-8 h-full bg-backgroundColor">

      <h1 className="text-2xl mb-4">Company Overview</h1>
      <p className="mt mb-10">Measuring with carbon footprint calculator will use financial data and utilize our own calculation formulas built based on GHG Protocol standards to calculate your business’s carbon footprint. It applies region and industry-level economic data to your operations. Going through the calculation process should take less than an hour depending on what information you have available.</p>

      {/* CONTAINER 1 - COMPANY NAME */}
      <div className="flex flex-row justify-between items-center py-8 bg-white px-10 mt-2 mb-4 rounded-xl border-2 border-gray-200 p-4 my-2">
        <h2 className="font-semibold text-lg">{user?.companyName}</h2>
        {/* <h3>Company registered in Finland</h3> */}
        <button className="flex flex-col rounded-lg border-2 border-orange-400 p-2 text-orange-400">Change Details</button>
      </div>

      {/* CONTAINER 2 - BUSINESS SECTOR */}
      <div className="flex flex-col py-8 justify-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200 my-4">
        <h2 className="font-semibold">Business Sector</h2>
        <select onChange={e => {updateUserData('businessSector', e.target.value)}} 
          className="border-gray-200 rounded-md border-2 p-2"
          placeholder="Select your business sector"
          value={user?.data?.businessSector}>
          {
            businessSectors.map((sector, index) => {
              return (<option key={index}>{sector}</option>)
            })
          }
        </select>
      </div>

      {/* CONTAINER 3 - CALENDAR YEAR */}
      <div className="flex flex-col py-8 justify-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200 my-4">
        <h2 className="font-semibold">Select calendar year to measure</h2>
        <select className="border-gray-200 rounded-md border-2 p-2">
          {
            yearsToMeasure.map((year, index) => {
              return (<option key={index}>{year}</option>)
            })
          }
        </select>
      </div>

      {/* CONTAINER 4 - EMPLOYEE AMOUNT */}
      <div className="flex flex-col py-8 justify-center bg-white px-10 gap-2 rounded-xl border-2 border-gray-200">
        <h2 className="font-semibold">How many full time equivalent employees does your company have?</h2>
        <h3>You can calculate part-time employees as: e.g. four 50% positions amounting to 2 full time employees.</h3>
        <input className="border-gray-200 rounded-md border-2 p-2"
          name="fullTimeEmployees"
          type="number"
          placeholder="Enter Amount"
          value={user?.data?.fullTimeEmployees}
          onChange={(e)=>{updateUserData('fullTimeEmployees', Number(e.target.value))}}
        >
        </input>
      </div>

      <div className="flex flex-row justify-end my-10">
        <button 
          className="bg-primary text-white rounded-xl px-4 py-2" 
          onClick={e => {updateUserData('state', 'OFFICES', 'COMPANY_OVERVIEW', true)}}
        >
          Continue
        </button>
      </div>
      
    </div>
  )
}

export default CompanyOverview