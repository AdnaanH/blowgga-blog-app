import { BsFillDoorClosedFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import LoginUser from "@/components/LoginUser";
import { handleGitHubLogin } from "@/lib/action";

const LoginPage = () => {

    return ( 
        <section className="flex items-center justify-center min-h-screen gap-4 py-16">
            <div className="md:w-2/6 w-full grid gap-4 bg-black p-6 rounded-md shadow-md">
                <h1 className="text-3xl font-bold text-white w-full justify-center items-center flex gap-2">Login</h1>
                <form action={handleGitHubLogin}>
                    <button className="font-bold text-white text-center border-2 w-full p-2 hover:bg-white hover:text-black transition-colors ease-out rounded-md flex justify-center items-center gap-3">Login with Github <FaGithubSquare /></button>
                </form>
                <LoginUser />
            
            </div>
        </section>
    );
}
 
export default LoginPage;