import React from 'react'
import Form from './form'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'
const page =async () => {
  let session=await auth()
  if(session){
    redirect('/')
  }
  return (
    <Form />
  )
}

export default page