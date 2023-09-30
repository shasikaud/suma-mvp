'use client'

const Blockchain = ({ user, updateUserData }) => {

  if (!user?.data) return <LoadingScreenSecondary/>
  
  return (
    <div className="ml-[265px] px-8 h-full bg-backgroundColor">
      <h1 className="text-2xl mb-10">Blockchain transactions</h1>
      <div className="bg-white p-4 text-slate-200">
        <h3>Select all the blockchain networks you operate on</h3>
        <p>Ethereum</p>
        <p>Polygon</p>
        <p>Solana</p>
      </div>
          <button className="justify-end text-white rounded-full px-4 py-2 bg-primary mt-10" onClick={e => {updateUserData('state', 'SUMMARY', 'BLOCKCHAIN', true)}}>Finish Calculation</button>
    </div>
  )
}

export default Blockchain