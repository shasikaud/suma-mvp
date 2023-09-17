'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link';

const Dashboard = () => {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <>
      <div className="flex flex-col bg-blue-400">Dashboard Section</div>
      <div className="flex flex-col bg-blue-500">
        {session?.user ? <h2>{`Hello ${session.user.name}, Welcome to the SUMA platform`}</h2> : <h2>Signin to view the dashboard!</h2>}
        <Link href='/calculator' className="flex flex-col bg-red-300">Start Carbon Accounting</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci augue, faucibus quis dignissim quis, gravida a odio. Nulla aliquam enim ipsum, vel viverra mauris lobortis eget. Proin pellentesque urna massa, a rhoncus nulla gravida non. In faucibus arcu sit amet nulla finibus, non imperdiet lectus vehicula. Fusce condimentum ante sit amet orci commodo posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ut interdum dolor.
        
        Sed vitae felis sem. Praesent rutrum nunc eget faucibus rutrum. Phasellus nisl est, facilisis non venenatis a, ultrices vitae augue. Etiam in elit finibus, suscipit tellus at, tristique magna. Integer hendrerit, tortor et accumsan euismod, neque tortor lacinia enim, id tempus ipsum lectus non quam. Nunc id ante consequat, bibendum diam sit amet, aliquam nisl. Vivamus porttitor iaculis molestie. Morbi sed odio et ipsum pretium cursus a quis tortor. Integer bibendum, arcu eu tempus venenatis, leo mi sodales nulla, sed vulputate nisl nulla vel magna. Etiam eros nibh, euismod quis nisi quis, dignissim scelerisque sem. Pellentesque congue mauris non ipsum ullamcorper, quis dapibus tellus commodo. Ut tincidunt, nisl a vestibulum finibus, elit velit cursus magna, ut efficitur purus lacus venenatis lorem. Quisque placerat ligula sem, a venenatis justo euismod vitae.</p>
      </div>
    </>
    
  )
}

export default Dashboard