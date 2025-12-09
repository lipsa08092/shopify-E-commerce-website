import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* top bar*/}
      <div className="bg-black text-gray-300 flex items-center justify-between px-3 sm:px-10 md:px-16 lg:px-20 py-2 text-sm">
        <span></span>

        <h1 className="text-center leading-tight px-3">
          Summer Sale For All Swim Suits - OFF 50%!
          <span className="text-gray-200 underline font-semibold pl-2">ShopNow</span>
        </h1>

        <div className="hidden sm:flex items-center gap-1">
          <p>English</p>
          <IoIosArrowDown className="text-white" />
        </div>
      </div>

      {/* main navbar */}
      <div className="flex justify-between items-center bg-white px-3 sm:px-10 md:px-16 lg:px-20 py-4 shadow mt-6">
        <h1 className="text-lg sm:text-xl md:text-3xl font-semibold text-gray-800">
          Shopify
        </h1>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10 font-medium">
          <p className="cursor-pointer text-gray-800 hover:text-gray-500">
            Home
          </p>
          <p className="cursor-pointer text-gray-800 hover:text-gray-500">
            Contact
          </p>
          <p className="cursor-pointer text-gray-800 hover:text-gray-500">
            About
          </p>
          <p className="cursor-pointer text-gray-800 hover:text-gray-500">
            Sign Up
          </p>
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="rounded-md pl-3 pr-10 py-2 w-40 sm:w-52 md:w-60 bg-gray-100 focus:outline-none"
            />
            <IoSearchSharp className="absolute right-3 top-3 text-gray-700 text-lg" />
          </div>

          <div className="flex items-center gap-4 text-xl cursor-pointer">
            <FaRegHeart className="hover:text-red-500 text-gray-600 text-md" />
            <AiOutlineShoppingCart className="hover:text-blue-500 text-gray-600" />
          </div>
        </div>

        <GiHamburgerMenu
          className="text-2xl md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* mobile menu*/}
      {open && (
        <div className="md:hidden bg-white shadow px-5 py-4 space-y-6 transition-all">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="what are You looking for ?"
              className="w-full rounded-md pl-5 pr-10 py-2 bg-gray-100 focus:outline-none"
            />
            <IoSearchSharp className="absolute right-3 top-3 text-gray-700 text-xl" />
          </div>
          <div className="flex  justify-between">
            <div className="flex gap-20 text-gray-800 font-medium text-base">
              <p className="hover:text-gray-500">Home</p>
              <p className="hover:text-gray-500">Contact</p>
              <p className="hover:text-gray-500">About</p>
              <p className="hover:text-gray-500">Sign Up</p>
            </div>

            <div className="flex items-center gap-6 text-xl pt-2">
              <FaRegHeart className="text-gray-800 hover:text-red-500" />
              <AiOutlineShoppingCart className="text-gray-800 hover:text-blue-500" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
