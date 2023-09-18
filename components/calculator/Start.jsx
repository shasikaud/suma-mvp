'use client'

const Start = ({ updateUserData }) => {
  return (
    <>
        <h1 className="bg-green-100">Calculate your company's carbon footprint</h1>
        <h1 className="bg-green-200">Here's what you'll need to complete the calculations</h1>
        <h2 className="bg-green-300">Description here</h2>
        <ul className="bg-green-400">
            <li>The company's total annual electricity</li>
            <li>Cloud service usage</li>
        </ul>
        <button className="bg-red-100" onClick={e => {updateUserData('state', 'COMPANY_OVERVIEW')}}>Start Now</button>
    </>
  )
}

export default Start