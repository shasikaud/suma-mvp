'use client'

const Blockchain = ({ user, updateUserData }) => {
  return (
    <div className="ml-[265px] px-8 h-full bg-backgroundColor">
      <h1 className="text-2xl mb-10">Blockchain transactions</h1>
      <div>
        <h3>Select all the blockchain networks you operate on</h3>
        <p>Ethereum</p>
        <p>Polygon</p>
        <p>Solana</p>
      </div>
    </div>
  )
}

export default Blockchain