'use client'

const Blockchain = ({ user, updateUserData }) => {
  return (
    <div className="ml-[265px] px-8 h-full bg-backgroundColor">
      <h1 className="text-2xl pt-10 pb-8">Blockchain transactions</h1>
      <div>
        <h3>Select all the blockchain networks you operate on</h3>
        <p>Ethereum</p>
        <p>Polygon</p>
        <p>Solana</p>
        <button 
          className="bg-red-100"
          onClick={e => {updateUserData('state', 'SUMMARY', 'BLOCKCHAIN', true)}}>
        Continue
        </button>
      </div>
    </div>
  )
}

export default Blockchain