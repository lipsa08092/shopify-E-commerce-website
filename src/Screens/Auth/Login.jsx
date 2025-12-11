import React from "react";
import banner from "../../assects/signup-banner.jpg";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      alert("No account found! Please sign up.");
      return;
    }

    const stored = JSON.parse(savedUser);
    const email = document.getElementById("loginEmail").value;

    if (stored.email !== email) {
      alert("Invalid Email!");
      return;
    }
    alert("Login Successful!");
    navigate("/");
  };

  return (
    <div className="pr-20 py-10">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-28">
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={banner}
            alt="signup Banner"
            className=" w-full lg:max-w-full h-[550px] object-cover"
          />
        </div>

        <div className=" w-full lg:w-1/2 flex flex-col justify-center ">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Log in to Shopify
          </h1>
          <p className="text-gray-900 mb-6">Enter Your details below</p>
          <div className="space-y-5">
            <input
              id="loginEmail"
              type="email"
              placeholder="Email or Phone Number"
              className="w-full border-b border-gray-400 py-2 outline-none text-gray-700"
            />
            <input
              type="password"
              placeholder="Password"
              className="text-gray-400 w-full border-b border-gray-400 py-2 outline-none"
            />
          </div>
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handleLogin}
              className="py-2 px-6 text-sm text-white rounded-sm bg-red-600 hover:bg-red-700 transition"
            >
              Log In
            </button>

            <p className="text-red-600 cursor-pointer hover:underline">
              Forget Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
