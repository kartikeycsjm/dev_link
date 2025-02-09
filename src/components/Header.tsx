import React from 'react'
import Link from 'next/link'
import { auth, signOut } from '@/auth'
const Header = async () => {
    const session = await auth()
    return (
        <header className='w-full h-16 bg-blue-400'>
            <div className='h-16 mx-5  flex items-center justify-between'>
                <h1 className='text-[2rem]'>Dev Link</h1>
                <div className='flex gap-3'>
                    {!session ? <>
                        <Link href={'/signin'}
                            className='px-2 py-1 border border-green-950
                        duration-300
                        hover:bg-green-950'>
                            Sign In
                        </Link>
                        <Link href={'/signup'}
                            className='px-2 py-1 border border-blue-950
                        duration-300
                        hover:bg-blue-950'>
                            Sign Up
                        </Link>
                    </> :
                        <form action={async()=>{
                            'use server'
                            await signOut()
                        }}>
                            <button type='submit'
                                className='px-2 py-1 border border-blue-950
                        duration-300
                        hover:bg-blue-950'>
                                Sign Out
                            </button>
                        </form>
                    }
                </div>
            </div>
        </header>

    )
}

export default Header