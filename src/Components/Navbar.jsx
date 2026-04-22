'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaHome } from 'react-icons/fa';
import { IoMdTimer } from 'react-icons/io';
import { ImStatsDots } from 'react-icons/im';

const navLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Sign Up", path: "/auth/signup", icon: <IoMdTimer /> },
  { name: "Sign In", path: "/auth/signin", icon: <ImStatsDots /> },
];

const Navbar = () => {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-lg transition-all duration-200 text-sm md:text-base ${
      pathname === path
        ? "bg-white text-green-700"
        : "text-white hover:bg-white/20"
    }`;

  return (
    <div className="navbar bg-gray-900 shadow-md flex justify-between px-20">

      {/* Logo */}
      <div className="navbar-start">
        <Link href="/">
          <h2 className="text-white font-bold text-xl md:text-2xl">
            Keen<span className="text-green-500">Keeper</span>
          </h2>
        </Link>
      </div>

      {/* Menu */}
      <div className="navbar-end">
        <ul className="menu menu-horizontal   gap-1 md:gap-3 lg:gap-4 font-semibold">
          {navLinks.map((link) => (
            <li  key={link.path}>
              <Link href={link.path} className={linkStyle(link.path)}>
                {link.icon}
                <span className="hidden md:inline">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;