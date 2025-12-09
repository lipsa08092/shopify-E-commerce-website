import React from "react";
import iphone from "../../assects/hero-image.jpg";
import { BsApple } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

function HeroSection() {
  return (
    <div className="flex mx-20 pt-6 gap-6">
      <div className="w-60 border-r-2 space-y-3.5 text-gray-700">
        <div className="flex gap-10">
          <p className="cursor-pointer hover:text-red-500">Women's Fashion </p>
          <IoIosArrowForward className="mt-1" />
        </div>
        <div className="flex gap-16 ">
          <p className="cursor-pointer hover:text-red-500">Men's Fashion</p>
          <IoIosArrowForward  className="mt-1"/>
        </div>

        <p className="cursor-pointer hover:text-red-500">Electronics</p>
        <p className="cursor-pointer hover:text-red-500">Home & Lifestyle</p>
        <p className="cursor-pointer hover:text-red-500">Medicine</p>
        <p className="cursor-pointer hover:text-red-500">Sports & Outdoor</p>
        <p className="cursor-pointer hover:text-red-500">Baby's & Toys</p>
        <p className="cursor-pointer hover:text-red-500">Groceries & Pets</p>
        <p className="cursor-pointer hover:text-red-500">Health & Beauty</p>
      </div>

      <div className="relative w-full h-80 bg-black p-16 flex justify-between items-center">
        <div className="text-white space-y-4">
          <div className="flex gap-3 ">
            <BsApple className="text-3xl" />
            <p className="text-gray-300 text-sm mt-2">iPhone 14 Series</p>
          </div>

          <h1 className="text-5xl font-bold">
            Up to 10% <br /> off Voucher
          </h1>

          <button className="mt-2 text-white underline flex items-center gap-2">
            Shop Now
          </button>
        </div>
        <div>
          <img src={iphone} alt="iphone" className="w-96 h-80 object-cover " />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
