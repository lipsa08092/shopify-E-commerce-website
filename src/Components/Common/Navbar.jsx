import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiUser } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { FaRegStar } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import logo from "../../assects/Shopify-logo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("user");
      if (savedUser && savedUser !== "undefined") {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.log("LocalStorage error:", error);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowMenu(false);
    navigate("/signup");
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full sticky top-0 z-50">
      {/* top bar*/}
      <div className="bg-black text-gray-300 flex items-center justify-between px-3 sm:px-10 md:px-16 lg:px-20 py-2 text-sm">
        <span></span>

        <h1 className="text-center px-3">
          Summer Sale For All Swim Suits - OFF 50%!
          <span className="text-gray-200 underline font-semibold pl-2">
            ShopNow
          </span>
        </h1>

        <div className="hidden sm:flex items-center gap-1">
          <p>English</p>
          <IoIosArrowDown className="text-white" />
        </div>
      </div>

      {/* main navbar */}
      <div className="flex justify-between items-center bg-white px-3 sm:px-10 md:px-16 lg:px-20 py-4 shadow-md">
        <div className="flex">
          <img src={logo} alt="logo"  className="w-16 h-8 mt-1"/>
        <h1 className="text-lg sm:text-xl md:text-3xl font-semibold text-gray-800">
          Sh<span className="text-green-500">opi</span>fy
        </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10 font-medium">
          <Link
            to="/"
            onClick={handleClick}
            className="cursor-pointer text-gray-800 hover:text-gray-500"
          >
            Home
          </Link>
          <Link
            to="/contact"
            onClick={handleClick}
            className="cursor-pointer text-gray-800 hover:text-gray-500"
          >
            Contact
          </Link>
          <Link
            to="/about"
            onClick={handleClick}
            className="cursor-pointer text-gray-800 hover:text-gray-500"
          >
            About
          </Link>
          <Link
            to="signup"
            onClick={handleClick}
            className="cursor-pointer text-gray-800 hover:text-gray-500"
          >
            Sign Up
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="rounded-md pl-3 pr-10 py-2 w-40 sm:w-52 md:w-60 bg-gray-100 focus:outline-none"
            />
            <IoSearchSharp className="absolute right-3 top-3 text-gray-700 text-lg" />
          </div>

          <div className="flex items-center gap-4 text-xl cursor-pointer">
            <FaRegHeart className="hover:text-red-500 text-gray-600 text-md cursor-pointer" />
            <AiOutlineShoppingCart className="hover:text-green-500 text-gray-600 cursor-pointer" />
            <div className="relative">
              <FiUser
                className="cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              />

              {/* account dropdown */}
              {showMenu && user && (
                <div className="absolute right-0 mt-3 bg-gradient-to-tr from-gray-400 via-purple-900 to-gray-700 shadow-xl rounded-lg w-72 py-5 px-5 text-gray-100">
                  <div className="flex ">
                    <AiOutlineUser className="mt-3 text-2xl hover:text-gray-400" />
                    <p
                      className="px-4 py-2  cursor-pointer hover:text-gray-400 font-medium"
                      onClick={() =>{navigate("/account")
                        handleClick();
                      }
                    }
                    >
                      Manage My Account
                    </p>
                  </div>

                  <div className="flex">
                    <FiShoppingBag className="mt-3 text-xl hover:text-gray-400"/>
                    <p className="px-4 py-2 cursor-pointer hover:text-gray-400 font-medium">
                      My Orders
                    </p>
                  </div>
                  <div className="flex">
                    <ImCancelCircle className="mt-3 text-xl hover:text-gray-400"/>
                    <p className="px-4 py-2 cursor-pointer hover:text-gray-400 font-medium">
                      My Cancellations
                    </p>
                  </div>
                  <div className="flex">
                    <FaRegStar className="mt-3 text-2xl hover:text-gray-400"/>
                    <p className="px-4 py-2  cursor-pointer hover:text-gray-400 font-medium">
                      My Reviews
                    </p>
                  </div>
                  <div className="flex">
                    <BiLogOut className="mt-3 text-2xl hover:text-red-600 "/>
                    <p
                      onClick={logout}
                      className="px-4 py-2 cursor-pointer  hover:text-red-600"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              )}

              {!user && showMenu && (
                <div className="absolute right-0 mt-3 bg-white shadow-xl w-40 py-3 text-sm text-center text-gray-900">
                  <p
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Login / SignUp
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <GiHamburgerMenu
          className="text-2xl md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* mobile menu*/}
      {open && (
        <div className="md:hidden bg-white shadow px-5 py-4 space-y-6 transition-all">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="what are You looking for ?"
              className="w-full rounded-md pl-5 pr-10 py-2 bg-gray-100 focus:outline-none"
            />
            <IoSearchSharp className="absolute right-3 top-3 text-gray-700 text-xl" />
          </div>
          <div className="flex  justify-between">
            <div className="flex gap-20 text-gray-800 font-medium text-base">
              <p className="hover:text-gray-500">Home</p>
              <p className="hover:text-gray-500">Contact</p>
              <p className="hover:text-gray-500">About</p>
              <p className="hover:text-gray-500">Sign Up</p>
            </div>

            <div className="flex items-center gap-6 text-xl pt-2">
              <FaRegHeart className="text-gray-800 hover:text-red-500" />
              <AiOutlineShoppingCart className="text-gray-800 hover:text-blue-500" />
              <FiUser
                onClick={() => navigate("/account")}
                className="hover:text-blue-500 text-gray-600"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
