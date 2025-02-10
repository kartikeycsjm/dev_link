
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import { Connect } from "./db/Connection";
import User from "./db/models/UserSchema";
import bcrypt from 'bcryptjs'
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google,
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                try {
                    let email = await credentials.email as string;
                    let password = await credentials.password as string;
                    await Connect();
                    const usersexists = await User.findOne({ email });
                    if (!usersexists) {
                        throw new Error('user is not registered')
                    }
                    const checkpassword = await bcrypt.compare(password, usersexists.password)
                    if (!checkpassword) {
                        throw new Error('password is incorred')
                    }
                    let verified = usersexists.verified;
                    if (!verified) {
                        throw new Error('You are not verified please verify your email')
                    }
                    console.log(usersexists);

                    return usersexists;
                } catch (error) {
                    console.log((error as Error).message);
                    return null
                }
            }
        })
    ],
    callbacks: {
        // signIn:async()=>{
        //     return false
        // },
        
        // jwt:async()=>{

        // },

        // session:async()=>{

        // }
    }
})