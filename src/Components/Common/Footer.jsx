import React from "react";
import AppStore from "../../assects/App-store.png";
import GoogleStore from "../../assects/Google-playstore.png";
import Scanner from "../../assects/Scanner.jpg";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="py-10 px-5 sm:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* logo */}
        <div>
          <h1 className="text-xl font-bold mb-3">Shopify</h1>
          <p className="mb-2 font-semibold">Subscribe</p>
          <p className="text-sm mb-3 text-gray-200">
            Get 10% off your first order
          </p>

          <div className="flex items-center border border-gray-400 rounded-md px-2 py-2 w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-gray-200 outline-none w-full text-sm"
            />
            <FaLocationArrow />
          </div>
        </div>

        {/* Support */}
        <div>
          <h1 className="text-lg font-semibold mb-3">Support</h1>
          <div className="space-y-3">
            <p className="text-sm text-gray-200">
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </p>
            <p className="text-sm  text-gray-200">exclusive@gmail.com</p>
            <p className="text-sm text-gray-200">+88015-88888-9999</p>
          </div>
        </div>

        {/* Account */}
        <div>
          <h1 className="text-lg font-semibold mb-3">Account</h1>
          <div className="space-y-3 text-sm">
            <p className="text-sm text-gray-200">My Account</p>
            <p className="text-sm text-gray-200">Login / Register</p>
            <p className="text-sm text-gray-200">Cart</p>
            <p className="text-sm text-gray-200">Wishlist</p>
            <p className="text-sm text-gray-200">Shop</p>
          </div>
        </div>

        {/* Quick Link */}
        <div>
          <h1 className="text-lg font-semibold mb-3">Quick Link</h1>
          <div className="space-y-3 text-sm">
            <p className="text-sm text-gray-200">Privacy Policy</p>
            <p className="text-sm text-gray-200">Terms Of Use</p>
            <p className="text-sm text-gray-200">FAQ</p>
            <p className="text-sm text-gray-200">Contact</p>
          </div>
        </div>

        <div>
          <h1 className="text-lg font-semibold ">Download App</h1>
          <p className="text-xs text-gray-300">
            Save $3 with App New User Only
          </p>
          <div className="flex items-center gap-4">
            <img src={Scanner} alt="QR" className="w-28" />
            <div className="flex flex-col">
              <div>
                <img
                  src={GoogleStore}
                  alt="Google Store"
                  className="w-32 object-contain "
                />
              </div>
              <div>
                <img src={AppStore} alt="App Store" className="w-32 object-contain" />
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-xl">
            <FaFacebookF />
            <LuTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="text-center border-t border-gray-800 py-4 text-sm text-gray-700">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
