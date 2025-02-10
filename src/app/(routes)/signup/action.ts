'use server'
import bcrypt from 'bcryptjs'
import { Connect } from '@/db/Connection'
import User from '@/db/models/UserSchema'
import { signIn } from '@/auth'
import { transporter } from '@/emailconfig'
export async function SignUp(formData: FormData) {
    try {
        const firstName = formData.get('firstName') as string
        const lastName = formData.get('lastName') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        console.log(firstName, lastName, email, password);
        await Connect();
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('User is already registered');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const name = `${firstName} ${lastName}`;
        const user =await User.create({ name, email, password: hashedPassword, provider: 'CREDENTIALS' });
        await transporter.sendMail({
            from: 'kartikeymishracsjm@gmail.com',
            to: email,
            subject: 'Email Verification on Dev Link',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                  <h2 style="color: #4CAF50;">Verify Your Account</h2>
                  <a href="${process.env.NEXTAUTH_URL}/verify/${user._id}">Click to Verify</a>
                </div>
              `,
            text: `you are welcome at devlink`,
        });
        return { status : 'success' }
    } catch (error) {
        console.log(error);
        return { status: 'failed', error: (error as Error).message }
    }
}



export const googleSignIn = async () => {
    await signIn('google', { redirect: true, redirectTo: '/' })
}

