"use client"
import { login } from "@/lib/action"
import Link from "next/link"
import { useFormState } from "react-dom";

const LoginUser = () => {
    const [state, formAction] = useFormState(login, undefined)

    // const router = useRouter()

    // useEffect(() => {
    //     state?.success && router.push(/)
    // }, [state?.success, router])

    return ( 
        <div>
            <form action={formAction} className="grid gap-1">
                <label htmlFor="username" className="text-white ">Username</label>
                <input type="text" placeholder="John Doe" name="username" className="mb-3 p-2 rounded-md focus:outline-none text-base"/>
                <label htmlFor="password" className="text-white ">Password</label>
                <input type="password" placeholder="••••••••" name="password" className="mb-3 p-2 rounded-md focus:outline-none text-base" />
                <button className="text-black bg-white text-center border-2 w-full p-2 font-bold transition-colors ease-out rounded-md flex justify-center items-center gap-3">Login with credentials</button>
                {state?.error}
                <Link href="/register" className="text-white w-full text-center mt-2">
                   Dont have an account? <b>Register</b>
                </Link>
            </form>
        </div>
     );
}
 
export default LoginUser;