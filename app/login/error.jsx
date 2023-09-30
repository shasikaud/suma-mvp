'use client'

import { signOut } from "next-auth/react"

const Error = () => {
  return (
    <div className="flex flex-col bg-primary w-full h-full z-40 text-white justify-center items-center">
        <h1>Oops, an unexpected error occured, our team is looking into this!</h1>
    </div>
  )
}

export default Error