import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty ,IoMdHeart } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import Rating from "../../Data/Rating";
import useWishlist from "../Hooks/useWishlist";
import useCart from "../Hooks/useCart";
import { useNavigate } from "react-router-dom";

function BestSelling() {
  const [products, setProducts] = useState([]);
  const [viewAll, setViewAll] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart} = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts.slice(5, 9));
    setAllProducts(storedProducts);
  }, []);
  
  const handleViewAll = () => {
    if (viewAll) {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.slice(5, 9));
    }
    setViewAll(!viewAll);
  };
  const handleClick = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  return (
    <div className="py-10 px-5 sm:px-10 lg:px-20">
      <div className="flex gap-3 items-center">
        <div className="w-4 h-10 rounded-md bg-red-600"></div>
        <p className="text-red-600 font-bold">This Months</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-4">
        <h1 className="text-4xl">Best Selling Products</h1>

        <button
          onClick={handleViewAll}
          className="text-sm text-gray-100 px-5 py-2 bg-red-500 hover:bg-red-600 rounded-md"
        >
          {viewAll ? "View All" : "Close"}
        </button>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="w-full">
            <div className="p-3 rounded-lg relative  hover:shadow-md transition">
              <div className="relative bg-gray-100 pt-5 pb-3 flex items-center justify-center">
                <img
                  src={item.img}
                  className="w-full h-40 sm:h-44 object-contain"
                  alt=""
                  onClick={() => {
                    navigate (`/product/${item.id}`)
                    handleClick();
                  }}
                />

                <button 
                onClick={() => addToCart(item)}
                className="absolute bottom-0 w-full opacity-0 hover:opacity-100 bg-black text-white font-semibold p-2 transition-all duration-300">
                  Add To Cart
                </button>
              </div>

              {wishlist.find((p) => p.id === item.id) ? (
                <IoMdHeart
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-6 right-6 text-2xl cursor-pointer bg-white rounded-full text-red-600"
                />
              ) : (
                <IoMdHeartEmpty
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-6 right-6 text-2xl cursor-pointer bg-white rounded-full text-gray-400"
                />
              )}
              
              <IoEye className="absolute top-14 right-6 text-2xl cursor-pointer bg-white rounded-full hover:text-red-500" />

              <p className="mt-3 text-sm font-medium">{item.title}</p>
              <Rating star={item.star} rating={item.rating} />

              <div className="flex gap-3 mt-2">
                <p className="text-red-600 font-bold">${item.price}</p>
                <p className="text-gray-500 line-through">
                  {item.oldPrice && `$${item.oldPrice}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSelling;
