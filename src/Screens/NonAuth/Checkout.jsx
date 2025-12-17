import React, { useState } from "react";
import useCart from "../../Components/Hooks/useCart";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();
  const [billing, setBilling] = useState({
    fullName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });
  const handleChange = (e) => {
    setBilling({
      ...billing,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    if (
      !billing.fullName.trim() ||
      !billing.address.trim() ||
      !billing.city.trim() ||
      !billing.phone.trim() ||
      !billing.email.trim()
    ) {
      alert("Please fill all required fields");
      return;
    }

    const orderDetails = {
      billingDetails: billing,
      cartItems: cart,
      totalAmount: cartTotal,
      paymentMode: "Cash on Delivery",
      orderDate: new Date().toLocaleString(),
    };

    localStorage.setItem("order", JSON.stringify(orderDetails));
    clearCart();
    navigate("/");
    alert("Order placed successfully!");
  };

  return (
    <div className="py-20 mx-4 sm:mx-10 lg:mx-20">
      <h1 className="text-gray-500 text-sm sm:text-base mb-20">
        Account / My Account / Product / View Cart /
        <span className="text-gray-900 font-medium">CheckOut</span>
      </h1>
      <h1 className="text-3xl font-medium  mb-6">Billing Details</h1>

      <div className="flex flex-col lg:flex-row gap-16 ">
        <div className="w-full mt-10 lg:w-1/2 space-y-6 ">
          <div>
            <label className="text-gray-400 text-xl">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={billing.fullName}
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-3 outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xl">Company Name</label>
            <input
              type="text"
              name="company"
              value={billing.company}
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-3 outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xl">
              Street Address <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={billing.address}
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-3 outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xl">
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              name="apartment"
              value={billing.apartment}
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-3 outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xl">
              Town/City <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={billing.city}
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-3 outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xl">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={billing.phone}
              name="phone"
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-3 outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xl">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="email"
              value={billing.email}
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-3 outline-none"
            />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-red-500" />
            <p>Save this information for faster check-out next time</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Cart Items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-14 h-14 object-cover"
                  />
                  <p className="text-black">{item.title}</p>
                </div>
                <p className="font-medium">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className=" pt-4 space-y-3 text-black">
            <div className="flex border-b border-gray-700 justify-between pb-3">
              <span>Subtotal:</span>
              <span className="font-medium">${cartTotal}</span>
            </div>
            <div className="flex border-b border-gray-700 justify-between pb-3">
              <span>Shipping:</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-semibold text-black">
              <span>Total:</span>
              <span>${cartTotal}</span>
            </div>
          </div>

          {/* Payment */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex gap-2">
                <input type="radio" name="payment" />
                <p>Bank</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-2 ml-4">
                  <img
                    src="http://freelogopng.com/images/all_img/1656227518bkash-logo-png.png"
                    alt="visa"
                    className="h-5"
                  />
                  <img
                    src="https://www.freepnglogos.com/uploads/visa-inc-png-18.png"
                    alt="visa"
                    className="h-5"
                  />
                  <img
                    src="https://logohistory.net/wp-content/uploads/2023/05/Mastercard-Logo-2016.png"
                    alt="master"
                    className="h-5"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked />
              <span>Cash on delivery</span>
            </div>
          </div>

          {/* Coupon */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 border border-black px-4 py-2 outline-none"
            />
            <button className="bg-red-500  text-white px-6">
              Apply Coupon
            </button>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="bg-red-500 text-white px-8 py-3 mt-4"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
