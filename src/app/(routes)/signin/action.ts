'use server'

import { signIn } from "@/auth"
import { signOut } from "@/auth"


export const LogInGoogle = async () => {
    await signIn('google')
}


export const LogInCredentials = async (formdata: FormData) => {
    try {
        const email = formdata.get('email');
        const password = formdata.get('password')
        let x = await signIn('credentials',
            { email, password,redirect:false}
        )
        return { status: 'success' }
    } catch (error) {
        console.log('error aaya h dosto loginfunction me', error);
        return { status: 'failed', error: (error as Error).message }
    }

}

export const LogOut = async () => {
    await signOut()
}
