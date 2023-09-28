'use client'

const Blockchain = ({ user, updateUserData }) => {
  return (
    <div>
        Select all the blockchain networks you operate on <br/>
        Ethereum
        Polygon
        Arbitrum <br/>
        <button 
          className="bg-red-100"
          onClick={e => {updateUserData('state', 'SUMMARY', 'BLOCKCHAIN', true)}}>
        Continue
        </button>
    </div>
  )
}

export default Blockchain