import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEye } from "react-icons/io5";

import sweater from "../../assects/sweater.png";
import bag from "../../assects/bag.png";
import cabinet from "../../assects/cabinet.png";
import Speaker from "../../assects/Speaker.png";

function BestSelling() {
  const products = [
    {
      id: 1,
      img: sweater,
      title: "The North Coat",
      price: 220,
      oldPrice: 360,
    },
    {
      id: 2,
      img: bag,
      title: "Gucci duffle Bag",
      price: 960,
      oldPrice: 1160,
    },
    {
      id: 3,
      img: Speaker,
      title: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
    },
    {
      id: 4,
      img: cabinet,
      title: "Small BookSell",
      price: 360,
      oldPrice: 470,
    },
  ];

  return (
    <div className="py-20 px-5 sm:px-10 lg:px-20">
      <div className="flex gap-3 items-center">
        <div className="w-4 h-10 rounded-md bg-red-600"></div>
        <p className="text-red-600 font-bold">This Months</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-4">
        <h1 className="text-4xl">Best Selling Products</h1>

        <button className="text-sm text-gray-100 px-5 py-2 bg-red-500 hover:bg-red-600 rounded-md">
          View All
        </button>
      </div>

  
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="w-[full]">
              <div className="p-3 rounded-lg relative  hover:shadow-md transition">
                <div className="relative bg-gray-100 pt-5 pb-3 flex items-center justify-center">
                  <img
                    src={item.img}
                    className="w-full h-40 sm:h-44 object-contain"
                    alt=""
                  />

                  <button className="absolute bottom-0 w-full opacity-0 hover:opacity-100 bg-black text-white font-semibold p-2 transition-all duration-300">
                    Add To Cart
                  </button>
                </div>

                <IoMdHeartEmpty className="absolute top-6 right-6 text-2xl cursor-pointer bg-white rounded-full hover:text-gray-500" />
                <IoEye className="absolute top-14 right-6 text-2xl cursor-pointer bg-white rounded-full hover:text-red-500" />

                <p className="mt-3 text-sm font-medium">{item.title}</p>

                <div className="flex gap-3 mt-2">
                  <p className="text-red-600 font-bold">${item.price}</p>
                  <p className="text-gray-500 line-through">${item.oldPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default BestSelling;
