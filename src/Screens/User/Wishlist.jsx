import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import Rating from "../../Data/Rating";
import { IoEye } from "react-icons/io5";
import useCart from "../../Components/Hooks/useCart";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [seeAll, setSeeAll] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const {addToCart} = useCart();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // remove single item
  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  // move all to cart
  const moveAllToCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  wishlist.forEach((wishItem) => {
    const exist = cart.find((cartItem) => cartItem.id === wishItem.id);

    if (exist) {
      cart = cart.map((cartItem) =>
        cartItem.id === wishItem.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      cart.push({ ...wishItem, quantity: 1 });
    }
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.removeItem("wishlist");

  setWishlist([]);
  window.dispatchEvent(new Event("wishlistUpdated"));
  window.dispatchEvent(new Event("cartUpdated"));

  alert("All items moved to cart");
};

  //just for you loads allproducts
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts.slice(5, 9));
    setAllProducts(storedProducts);
  }, []);
  const handleSeeAll = () => {
    if (seeAll) {
      setProducts(allProducts.slice(5, 9));
    } else {
      setProducts(allProducts);
    }
    setSeeAll(!seeAll);
  };

  return (
    <div className="mx-4 sm:mx-10 lg:mx-20 py-10 lg:py-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Wishlist ({wishlist.length})</h2>

        {wishlist.length > 0 && (
          <button
            onClick={moveAllToCart}
            className="border border-black px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white transition"
          >
            Move All To Bag
          </button>
        )}
      </div>

      {/* wishlist items */}
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="border p-3 relative group">
              <RiDeleteBin6Line
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-2 right-2 text-xl cursor-pointer hover:text-red-600 "
              />

              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-contain"
              />

              <button 
              onClick={() => addToCart(item)}
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 text-sm mt-3">
                <AiOutlineShoppingCart />
                Add To Cart
              </button>

              <h3 className="mt-2 text-sm font-medium">{item.title}</h3>

              <div className="flex gap-2 text-sm mt-1">
                <span className="text-red-600 font-semibold">
                  ${item.price}
                </span>
                {item.oldPrice && (
                  <span className="line-through text-gray-400">
                    ${item.oldPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* just for you */}
      <div className="mt-14">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-3 items-center">
            <div className="w-4 h-10 rounded-md bg-red-600"></div>
            <p className="text-red-600 font-bold">Just For You</p>
          </div>
          <button
            onClick={handleSeeAll}
            className="border px-4 py-2 text-sm hover:bg-black hover:text-white"
          >
            {seeAll ? "Close" : "See All"}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="w-[full]">
              <div className="p-3 rounded-lg relative  hover:shadow-md transition">
                <div className="relative bg-gray-100 pt-5 pb-3 flex items-center justify-center">
                  <img
                    src={item.img}
                    className="w-full h-40 sm:h-44 object-contain"
                    alt=""
                  />

                  <button  
                  onClick={() => addToCart(item)}
                  className="absolute bottom-0 w-full opacity-0 hover:opacity-100 bg-black text-white font-semibold p-2 transition-all duration-300">
                    Add To Cart
                  </button>
                </div>
                <IoEye className="absolute top-6 right-6 text-2xl cursor-pointer bg-white rounded-full hover:text-red-500" />

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
    </div>
  );
}

export default Wishlist;
