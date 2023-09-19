'use client'

const Start = ({ updateUserData }) => {
  return (
    <div className="flex flex-col w-full ">
        <h1>Calculate your company's carbon footprint </h1>
        <h1>Here's what you'll need to complete the calculations </h1>
        <h1>Measuring with our carbon footprint calculator should take less than an hour if you come prepared with the following information about your company's operations. </h1>
        <ul className="bg-green-200 w-40">
            <li>The company's total annual electricity</li>
            <li>Cloud service usage</li>
        </ul>
        <button className="flex w-40 bg-red-600" onClick={e => {updateUserData('state', 'COMPANY_OVERVIEW')}}>
          Start Now S
        </button>
    </div>
  )
}

export default Start