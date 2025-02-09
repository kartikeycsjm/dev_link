'use client'
import React, { useEffect, useState } from 'react'
import { SignUp } from './action'
import { googleSignIn } from './action'
const page = () => {
    const [message, setMessage] = useState('');
    const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const res = await SignUp(data);
        setMessage(res.status)
    }
    return (
        <div className='w-full h-screen flex flex-col'>
            <h1 className="text-3xl 
            font-bold text-center m-8">
                Create an Account
            </h1>
            <p className="text-center 
              text-muted-foreground mb-3">
                Join our community and start your
                journey with us today.
            </p>
            <form onSubmit={async (e) => {
                e.preventDefault();
                await googleSignIn()
            }}
                className='m-3 p-3 flex items-center justify-center'>
                <button type='submit' className='px-4 py-2 bg-blue-950 text-white
        w-[350px]'>
                    Join with your Google Account
                </button>
            </form>
            <form onSubmit={handleClick}
                className='w-full h-[70vh] flex items-center flex-col'>
                <div className='flex w-[400px]
            justify-center my-5 gap-[10px]'>
                    <input type="text" name='firstName'
                        required
                        placeholder='First Name'
                        className='px-4 py-2 w-[170px]
            border border-blue-400
          focus:outline-blue-950 
          focus:border-blue-950 ' />
                    <input type="text" name='lastName'
                        required
                        placeholder='Last Name'
                        className='px-4 py-2 w-[170px] border 
            border-blue-400
            focus:outline-blue-950 
            focus:border-blue-950 ' />
                </div>
                <input type="text"
                    placeholder='Email' name='email'
                    required
                    className='p-2 m-2 my-5 w-[350px]
          border border-blue-400
        focus:outline-blue-950 
        focus:border-blue-950 ' />
                <input type="password"
                    placeholder='Password' name='password'
                    required
                    className='p-2 m-2 my-5 w-[350px]
          border border-blue-400
        focus:outline-blue-950 
        focus:border-blue-950 ' />
                <button type='submit'
                    className='p-2 my-5 w-[350px]
        bg-blue-500 text-white'>
                    Sign Up
                </button>
                {message && <p>
                    {message === 'failed' ?
                        'User is registered with this email please login or use another email'
                        :
                        'You are registered now check your email to verify then login'}
                </p>}
            </form>

        </div>
    )
}

export default page