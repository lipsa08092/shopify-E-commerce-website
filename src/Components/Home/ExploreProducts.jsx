import React,{useEffect, useState} from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEye } from "react-icons/io5";


function ExploreProducts() {
 const [products, setProducts] = useState([]);
  
 useEffect(()=> {
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  setProducts(storedProducts.slice(8,16));
 }, []);

  return (
    <div className="py-20 px-5 sm:px-10 lg:px-20">
      <div className="flex gap-3 items-center">
        <div className="w-4 h-10 rounded-md bg-red-600"></div>
        <p className="text-red-600 font-bold">Our Products</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-4">
        <h1 className="text-4xl">Explore Our Products</h1>

        <button className="text-sm text-gray-100 px-5 py-2 bg-red-500 hover:bg-red-600 rounded-md">
          View All
        </button>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg relative hover:shadow-md transition 
              ${index === 4 || index === 6}
            `}
          >
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
            {item.arrival && (
              <p className="absolute top-6 left-6 bg-green-500 text-white px-2 py-1 rounded-md text-sm">
                {item.arrival}
              </p>
            )}

            <IoMdHeartEmpty className="absolute top-6 right-6 text-2xl cursor-pointer bg-white rounded-full hover:text-gray-500" />
            <IoEye className="absolute top-14 right-6 text-2xl cursor-pointer bg-white rounded-full hover:text-red-500" />

            <p className="mt-3 text-sm font-medium">{item.title}</p>

            <div className="flex gap-3 mt-2">
              <p className="text-red-600 font-bold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-red-600 text-white px-8 py-3 rounded-md">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default ExploreProducts;
