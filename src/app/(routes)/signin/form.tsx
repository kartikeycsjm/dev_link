'use client'
import { LogInCredentials, LogInGoogle } from "./action"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { useEffect, useState } from "react"
const LoginPage = () => {
    const router=useRouter()
    let [message, setMessage] = useState('')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const res = await LogInCredentials(data);
        setMessage(res.status)
    }
    useEffect(()=>{
        router.refresh()
    },[message])
    return (
        <div className='w-full min-h-screen flex 
                flex-col items-center'>
            <h1 className="text-3xl 
                    font-bold text-center m-5">
                Welcome Back
            </h1>
            <p className="text-center 
                        text-muted-foreground mb-3">
                Please Login
            </p>
            <div className='m-4 p-4 
                    flex items-center flex-col justify-center'>
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    await LogInGoogle();
                }}>
                    <button
                        type="submit"
                        className="px-4 py-2 text-white 
                                transition-colors 
                                        duration-200 
                                      bg-blue-950 rounded
                                      hover:bg-blue-800"
                    >
                        Continue with Google
                    </button>
                </form>
                <div className='flex 
                        w-full justify-center items-center my-5'>
                    <hr className='bg-white w-[40%]' />
                    <p className='w-[10%] text-center font-bold'>OR</p>
                    <hr className='bg-white w-[40%]' />
                </div>
                <form onSubmit={handleSubmit}
                    className='m-4 flex flex-col
                            items-center'>
                    <input type="text" name="email"
                        placeholder='Email'
                        required
                        className='p-2 m-2 my-5 w-[360px]
                                    border border-blue-400
                                  focus:outline-blue-950 
                                  focus:border-blue-950 ' />
                    <input type="password" name="password"
                        placeholder='Password'
                        required
                        className='p-2 m-2 my-5 w-[360px]
                                    border border-blue-400
                                  focus:outline-blue-950 
                                  focus:border-blue-950 ' />
                    <button type='submit'
                        className='p-2 my-5 w-[360px]
                                bg-blue-500 text-white'>
                        Sign In
                    </button>
                </form>
                {message && <p>
                    {message === 'failed' ?
                        'please verify your email before login'
                        :
                        'You are logged in'
                    }
                </p>}

                <div>
                    <p className='inline'>
                        Don't have account?
                    </p>
                    <Link href={'/signup'}
                        className='inline underline
                         text-blue-800'> Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export { LoginPage }




