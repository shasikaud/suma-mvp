'use client'

const Start = ({ updateUserData }) => {
  return (
    <div className="flex flex-col w-full gap-2 pl-8 ml-[265px] bg-backgroundColor">
        <h3 className="py-8 mb-8 text-grayBlue font-semibold">Calculate your company's carbon footprint</h3>
        <h1 className="font-semibold text-2xl mb-2">Here's what you'll need to complete the calculations </h1>
        <p className="text-grayBlue"> Measuring with our carbon footprint calculator should take less than an hour if you come prepared with the following information about your company's operations.</p>

        <div className="flex flex-row bg-white w-6/12 px-8 py-6 mt-10 mb-2 border border-gray rounded-xl">
            <img src="/assets/green-checkmark.svg" alt="checkmark" width="25"/>
            <p className="pl-8 font-semibold">The company's total annual electricity consumption for all offices.</p>
        </div>

          <div className=" flex flex-row bg-white w-6/12 px-8 py-6 mb-2 border border-gray rounded-xl">
            <img src="/assets/green-checkmark.svg" alt="checkmark" width="25"/>
            <p className="pl-8 font-semibold">Login credentials for your cloud computing service, such as AWS.</p>
          </div>

          <div className=" flex flex-row bg-white w-6/12 px-8 py-6 mb-2 border border-gray rounded-xl">
            <img src="/assets/green-checkmark.svg" alt="checkmark" width="25"/>
            <p className="pl-8 font-semibold">The number of employees and their average mode of commuting to work.</p>
          </div>

          <div className=" flex flex-row bg-white w-6/12 px-8 py-6 mb-2 border border-gray rounded-xl">
            <img src="/assets/green-checkmark.svg" alt="checkmark" width="25"/>
            <p className="pl-8 font-semibold">A summary of your business travels.</p>
          </div>

          <div className=" flex flex-row bg-white w-6/12 px-8 py-6 mb-2 border border-gray rounded-xl">
            <img src="/assets/green-checkmark.svg" alt="checkmark" width="25"/>
            <p className="pl-8 font-semibold">An inventory of electronic devices, such as computers and mobile phones.</p>
          </div>

        <button className="flex justify-center text-slate-50 bg-primary px-6 py-3 rounded-xl mt-6 mr-auto text-center transition hover:bg-primaryHover" onClick={e => {updateUserData('state', 'COMPANY_OVERVIEW')}}>
          Start Now
        </button>
    </div>
  )
}

export default Start