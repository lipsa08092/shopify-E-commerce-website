import React from "react";
import iphone from "../../assects/hero-image.jpg";
import { BsApple } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row mx-4 sm:mx-10 lg:mx-20 pt-6 gap-6">

      <div className="hidden lg:block w-60 border-r-2 space-y-3.5 text-gray-700 pr-4">
        <div className="flex justify-between items-center">
          <p className="cursor-pointer hover:text-red-500">Women's Fashion</p>
          <IoIosArrowForward />
        </div>

        <div className="flex justify-between items-center">
          <p className="cursor-pointer hover:text-red-500">Men's Fashion</p>
          <IoIosArrowForward />
        </div>

        <p className="cursor-pointer hover:text-red-500">Electronics</p>
        <p className="cursor-pointer hover:text-red-500">Home & Lifestyle</p>
        <p className="cursor-pointer hover:text-red-500">Medicine</p>
        <p className="cursor-pointer hover:text-red-500">Sports & Outdoor</p>
        <p className="cursor-pointer hover:text-red-500">Baby's & Toys</p>
        <p className="cursor-pointer hover:text-red-500">Groceries & Pets</p>
        <p className="cursor-pointer hover:text-red-500">Health & Beauty</p>
      </div>

      <div className="relative w-full bg-black p-6 sm:p-10 lg:p-16 h-auto lg:h-80 flex flex-col lg:flex-row justify-between items-center">

        <div className="text-white space-y-4 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start gap-3">
            <BsApple className="text-3xl" />
            <p className="text-gray-300 text-sm mt-2">iPhone 14 Series</p>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Up to  10%  Off Voucher
          </h1>

          <button className="mt-2 text-white underline flex items-center justify-center lg:justify-start gap-2">
            Shop Now
          </button>
        </div>
        <div>
          <img
            src={iphone}
            alt="iphone"
            className="w-60 sm:w-72 lg:w-96 h-auto object-cover mt-6 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
