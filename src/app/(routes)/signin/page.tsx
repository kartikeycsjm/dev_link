import {redirect} from 'next/navigation'
import React from 'react'
import { LoginPage } from './form'
import { auth } from '@/auth'
const page = async() => {
  const session=await auth();
  if(session){
    redirect('/')
  }
  return (
    <LoginPage />
  )
}

export default page