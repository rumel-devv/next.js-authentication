"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import { signOut, useSession } from "@/lib/auth-client";

const navLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Sign Up", path: "/auth/signup", icon: <IoMdTimer /> },
  // { name: "Sign In", path: "/auth/signin", icon: <ImStatsDots /> },
];

const Navbar = () => {
  const pathname = usePathname();

  const { data, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  console.log("Session data in navbar", data);
  const user = data?.user;

  const linkStyle = (path) =>
    `flex items-center gap-2 px-3 py-1 rounded-lg transition-all duration-200 text-sm md:text-base whitespace-nowrap ${
      pathname === path
        ? "bg-white text-green-700"
        : "text-white hover:bg-white/20"
    }`;

  return (
    <div className="bg-gray-900 shadow-md py-2">
      <div className="w-10/12  mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <h2 className="text-white font-bold text-xl md:text-2xl">
            King<span className="text-green-500">Space</span>
          </h2>
        </Link>
        <ul className="flex items-center gap-2 md:gap-4 font-semibold">
          {navLinks.map((link) => (
            <li key={link.path} className="flex ">
              <Link href={link.path} className={linkStyle(link.path)}>
                {link.icon}
                <span className="hidden md:inline">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          {user ?
           <div className="flex justify-center items-center gap-2.5"> <p className="text-white">Wellcome {user.name} </p>
            <button className="bg-gray-50 px-4 py-1.5 rounded-lg"
            onClick={() => signOut()}
            >Log Out </button> 
            </div> 
           :  <Link className="bg-gray-50 px-4 py-1.5 rounded-lg" href='/auth/signin'> Sign in </Link> }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
