import React, { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEye } from "react-icons/io5";

import Chair from "../../assects/chair.png";
import Computer from "../../assects/computer.png";
import Keyboard from "../../assects/keyboard.png";
import Videogame from "../../assects/videogame.png";
import Speaker from "../../assects/Speaker.png";

function FlashSales() {
  const products = [
    {
      id: 1,
      img: Videogame,
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: 40,
    },
    {
      id: 2,
      img: Keyboard,
      title: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: 35,
    },
    {
      id: 3,
      img: Computer,
      title: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: 30,
    },
    {
      id: 4,
      img: Chair,
      title: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: 25,
    },
    {
      id: 5,
      img: Speaker,
      title: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      discount: 26,
    },
  ];
  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    if (index < products.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="py-20 mx-4 sm:mx-10 lg:mx-20 border-b">
      <div className="flex gap-3 items-center">
        <div className="w-4 h-10 rounded-md bg-red-600"></div>
        <p className="text-red-600 font-bold">Today's</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-3 gap-6">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-14 items-start sm:items-center font-bold">
          <h1 className="text-3xl sm:text-4xl">Flash Sales</h1>

          {/* Timer */}
          <div className="flex gap-3">
            <div className="text-center">
              <p className="text-gray-600 text-xs">Days</p>
              <h2 className="text-2xl">03</h2>
            </div>

            <h2 className="text-3xl text-red-600 mt-3">:</h2>

            <div className="text-center">
              <p className="text-gray-600 text-xs">Hours</p>
              <h2 className="text-2xl">23</h2>
            </div>

            <h2 className="text-3xl text-red-600 mt-3">:</h2>

            <div className="text-center">
              <p className="text-gray-600 text-xs">Minutes</p>
              <h2 className="text-2xl">19</h2>
            </div>

            <h2 className="text-3xl text-red-600 mt-3">:</h2>

            <div className="text-center">
              <p className="text-gray-600 text-xs">Seconds</p>
              <h2 className="text-2xl">56</h2>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-3 self-end lg:self-auto">
          <div
            onClick={prevSlide}
            className=" w-10 h-10 flex items-center justify-center border rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            <FaArrowLeftLong />
          </div>

          <div
            onClick={nextSlide}
            className=" w-10 h-10 flex items-center justify-center border rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
          >
            <FaArrowRightLong />
          </div>
        </div>
      </div>

      <div className="overflow-hidden mt-10">
        <div
          className="flex transition-all duration-500"
          style={{
            transform: `translateX(-${index * 25}%)`,
            width: `${products.length * 25}%`,
          }}
        >
          {products.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 lg:w-1/4 p-3 flex-shrink-0">
              <div className="p-3 rounded-lg relative">
                <div className="relative bg-gray-100 pt-5 pb-3 flex items-center justify-center">
                  <img
                    src={item.img}
                    className="w-full h-44 object-contain"
                    alt=""
                  />

                  <button className="absolute bottom-0 w-full opacity-0 hover:opacity-100 bg-black text-white font-semibold p-2 transition-all duration-300">
                    Add To Cart
                  </button>
                </div>

                <p className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                  -{item.discount}%
                </p>

                <IoMdHeartEmpty className="absolute top-4 right-4 text-2xl cursor-pointer bg-white rounded-full hover:text-gray-500" />
                <IoEye className="absolute top-12 right-4 text-2xl cursor-pointer bg-white rounded-full hover:text-red-500" />

                <p className="mt-3 text-sm">{item.title}</p>

                <div className="flex gap-3 mt-2">
                  <p className="text-red-600 font-bold">${item.price}</p>
                  <p className="text-gray-500 line-through">${item.oldPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-red-600 text-white px-8 py-3 rounded-md">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default FlashSales;
