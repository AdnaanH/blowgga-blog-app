"use client"
import { registerUser } from "@/lib/action";
import {useFormState} from "react-dom"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterUser = () => {
    const [state, formAction] = useFormState(registerUser, undefined)

    const router = useRouter()

    useEffect(() => {
        state?.success && router.push('login')
    }, [state?.success, router])

    return ( 
        <div>
            <form action={formAction} className="grid gap-1">
                <label htmlFor="username" className="text-white ">Username</label>
                <input type="text" placeholder="John Doe" name="username" className="mb-3 p-2 rounded-md focus:outline-none text-base"/>
                <label htmlFor="email" className="text-white ">Email</label>
                <input type="email" placeholder="abc123@abc.com" name="email" className="mb-3 p-2 rounded-md focus:outline-none text-base"/>
                <label htmlFor="username" className="text-white ">Password</label>
                <input type="password" placeholder="••••••••" name="password" className="mb-3 p-2 rounded-md focus:outline-none text-base"/>
                <label htmlFor="username" className="text-white ">Repeat Password</label>
                <input type="password" placeholder="••••••••" name="passwordRepeat" className="mb-3 p-2 rounded-md focus:outline-none text-base"/>
                <button className="text-black bg-white text-center border-2 w-full p-2 font-bold transition-colors ease-out rounded-md flex justify-center items-center gap-3">Register</button>
                {state?.error}
                <Link href="/login" className="text-white w-full text-center">
                    Have an account? <b>Login</b>
                </Link>
            </form>
        </div>
     );
}
 
export default RegisterUser;