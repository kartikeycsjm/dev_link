import React from 'react'
import { auth } from '@/auth'
const page = async () => {
  const session = await auth();
  console.log(session);
  
  return (
    <div className='w-full min-h-screen flex items-center justify-center
    flex-col'>
      <h1 className='text-[50px]'>This is landing page</h1>
      <h2 className='text-[40px]'>
        {session?.user?.name}
      </h2>
    </div>
  )
}

export default page