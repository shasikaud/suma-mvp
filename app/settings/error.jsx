'use client'

import { signOut } from "next-auth/react"

const Error = () => {
  return (
    <div className="flex flex-col bg-primary w-full h-full z-40 text-white justify-center items-center">
        <h1>Oops, an unexpected error occured, our team is looking into this!</h1>
        <button 
            className="border-white border-2 rounded-xl px-2 py-2 mt-2"
            onClick={signOut}
        >Click here
        </button>
    </div>
  )
}

export default Error