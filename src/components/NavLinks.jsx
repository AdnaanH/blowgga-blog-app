"use client";
import { useState, useEffect } from "react";
import { handleLogout } from "@/lib/action";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import PropTypes from "prop-types";
import Links from "./Link";

const NavLinks = ({ session }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log(session); // Check session value
    }, [session]);

    return (
        <div className="flex justify-between items-center space-x-8">
            <div className="hidden md:flex items-center gap-6 font-semibold text-xl">
                <Links />
            </div>
            <div className="md:flex hidden items-center gap-4 text-base font-semibold">
                {session?.user ? (
                    <div className="flex items-center space-x-3">
                        {session.user?.isAdmin && (
                            <Link href="/admin" className="text-blue-600 py-2 px-4 border-2 rounded-md">
                                Admin
                            </Link>
                        )}
                        <form action={handleLogout} className="flex items-center">
                            <button className="p-3">
                                <MdLogout size={30} />
                            </button>
                        </form>
                    </div>
                ) : (
                    <Link href="/login" className="bg-black rounded-md text-white px-4 py-2 ml-4 font-bold hover:opacity-90 hover:animate-pulse">
                        Login
                    </Link>
                )}
            </div>
            {/* Mobile Menu */}
            <div
                className="md:hidden flex flex-col gap-[5px] cursor-pointer md:pr-0 pr-2"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div
                    className={`w-6 h-1 bg-black rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500`}
                />
                <div
                    className={`w-6 h-1 bg-black rounded-sm ${isOpen ? "opacity-0" : ""} ease-in-out duration-500`}
                />
                <div
                    className={`w-6 h-1 bg-black rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500`}
                />
            </div>
            {isOpen && (
                <div className="absolute transition-all ease-in duration-1000 left-0 top-14 w-full h-screen p-4 bg-white text-black flex flex-col gap-4">
                    <div className="flex flex-col items-start gap-2 font-semibold text-xl">
                        <Link href="/">Tech</Link>
                        <Link href="/">Lifestyle</Link>
                        <Link href="/">Travel</Link>
                        <Link href="/">Health</Link>
                        <Link href="/">News</Link>
                        <Link href="/">Fashion</Link>
                    </div>
                    <div className="flex w-full flex-col items-center gap-4 mt-3 text-white text-base font-semibold">
                        {session?.user ? (
                            <>
                                {session.user?.isAdmin && (
                                    <Link href="/admin" className="w-full bg-white border-2 rounded-md text-center border-black text-black px-4 py-2 font-bold hover:opacity-90 hover:animate-pulse">
                                        Admin
                                    </Link>
                                )}
                                <button className="text-center bg-white">
                                    <MdLogout size={30} color="#000000" />
                                </button>
                            </>
                        ) : (
                            <Link href="/login" className="w-full bg-white border-2 rounded-md text-center border-black text-black px-4 py-2 font-bold hover:opacity-90 hover:animate-pulse">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

NavLinks.propTypes = {
    session: PropTypes.object,
};

export default NavLinks;
