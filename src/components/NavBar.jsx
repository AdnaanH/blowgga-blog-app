import Image from "next/image";
import NavLinks from "./NavLinks";
import { auth } from "@/lib/auth";
import Link from "next/link";

const NavBar = async () => {
    const session = await auth();
    console.log(session);

    return (
        <div className="flex justify-between items-center md:px-16 px-0 h-16 text-black absolute w-full">
            <Link href="/">
                <Image 
                    src="/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                    className="md:pl-0 pl-2"
                />
            </Link>
            <NavLinks session={session} />            
        </div>
    );
}
 
export default NavBar;
