"use client";
import { IoIosArrowDown } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6 border-b border-[#131F0C] bg-dark relative transition-all">
      <Image
        className="absolute left-0 top-0 w-auto h-auto"
        src="/top-color.png"
        width={100}
        height={100}
        alt=""
      />
      <Link href="/">
        <Image src="/logo.png" width={157} height={60} alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <div className="hidden lg:flex items-center text-sm gap-2 border px-3 py-2 rounded-sm bg-[#1F2B19] w-xs ">
          <div className="relative">
            <select
              className="appearance-none text-white pr-8 pl-2 py-2 rounded-lg cursor-pointer border border-transparent focus:border-green-500 focus:outline-none bg-header-selector"
              defaultValue="Web Developer"
            >
              <option className="bg-[#1F2B19] text-white" value="Freelancer">
                Freelancer
              </option>
              <option
                className="bg-[#1F2B19] text-white"
                value="Mobile Developer"
              >
                Mobile Developer
              </option>
              <option
                className="bg-[#1F2B19] text-white"
                value="UI/UX Designer"
              >
                UI/UX Designer
              </option>
              <option
                className="bg-[#1F2B19] text-white"
                value="Data Scientist"
              >
                Data Scientist
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <IoIosArrowDown color="white" />
            </div>
          </div>
        </div>
        <Link className="text-white hover:text-primary" href="/">
          BECAME A SELLER
        </Link>
        <Link className="text-white hover:text-primary" href="/login">
          LOGIN
        </Link>

        <Link
          href="/registration"
          className="cursor-pointer px-10 py-3 bg-primary hover:opacity-90 transition text-white rounded-full"
        >
          Registration
        </Link>
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <a href="#" className="block">
          Home
        </a>
        <a href="#" className="block">
          About
        </a>
        <a href="#" className="block">
          Contact
        </a>
        <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
