'use client'

import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

const Page = () => {
    const { data: session } = useSession();
    if (!session) redirect('/');
  return (
    <div>
        DEMO PAGE
        <button onClick={()=>signOut()}>Sign Out</button>
    </div>
  )
}

export default Page