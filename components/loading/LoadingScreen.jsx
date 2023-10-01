'use client'

const LoadingScreen = () => {
  return (
    <div className='fixed top-0 left-0 right-0 w-screen h-screen flex justify-center items-center text-center bg-primary z-40'>
        <h1 className='text-xl text-white'>Loading...</h1>
    </div>
  )
}

export default LoadingScreen