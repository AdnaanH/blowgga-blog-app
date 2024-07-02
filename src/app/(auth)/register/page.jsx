import RegisterUser from "@/components/RegisterUser";
import { registerUser } from "@/lib/action";

const RegisterPage = () => {
    return ( 
        <section className="flex items-center justify-center min-h-screen gap-4 py-16">
            <div className="md:w-2/6 w-full grid gap-4 bg-black p-6 rounded-md shadow-md">
                <h1 className="text-3xl font-bold text-white w-full justify-center items-center flex gap-2">Register</h1>
                <RegisterUser />
            
            </div>
        </section>
    );
}
 
export default RegisterPage;