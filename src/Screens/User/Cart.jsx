import React from "react";
import useCart from "../../Components/Hooks/useCart";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="py-20 mx-4 sm:mx-10 lg:mx-20">
      <h1 className="text-gray-500 text-sm sm:text-base mb-10">
        Home / <span className="text-gray-900 font-medium">Cart</span>
      </h1>

      <div className=" rounded-sm">
        <div className="grid grid-cols-4 text-sm font-medium shadow-sm px-6 py-4">
          <p className="">Products</p>
          <p className="text-center">Price</p>
          <p className="text-center">Quantity</p>
          <p className="text-right">Subtotal</p>
        </div>

        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 items-center px-6 py-6 shadow-sm"
          >
            {/* Product */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img src={item.img} alt="" className="w-14" />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute -top-2 -left-2 bg-red-600 text-white w-4 h-4 rounded-full text-sm flex items-center justify-center"
                >
                  <RxCross2 />
                </button>
              </div>
              <p className="text-sm">{item.title}</p>
            </div>
            
            {/*price*/}
            <p className="text-center">${item.price}</p>

            {/* Quantity */}
            <div className="flex justify-center">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
                className="border border-gray-400 w-16 text-center py-1"
              />
            </div>

            {/* Subtotal */}
            <p className="text-right">${item.price * item.quantity}</p>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between  py-4">
          <Link
            to="/"
            onClick={handleClick}
            className="border border-gray-400 px-6 py-2 text-sm"
          >
            Return To Shop
          </Link>
          <button className="border border-gray-400 px-6 py-2 text-sm">
            Update Cart
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-10 mt-10">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-black px-4 py-2 w-60 h-10 "
          />
          <button className="bg-red-500 rounded-md text-white px-6 py-2 h-10">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="border border-black p-6 w-full max-w-sm">
          <h3 className="font-medium mb-4">Cart Total</h3>

          <div className="flex justify-between text-sm border-b pb-2">
            <p>Subtotal:</p>
            <p>${cartTotal}</p>
          </div>

          <div className="flex justify-between text-sm border-b py-2">
            <p>Shipping:</p>
            <p>Free</p>
          </div>

          <div className="flex justify-between font-medium py-2">
            <p>Total:</p>
            <p>${cartTotal}</p>
          </div>
          <Link to="/checkout" onClick={handleClick}>
            <button className="bg-red-500 text-white w-full mt-4 py-3">
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
