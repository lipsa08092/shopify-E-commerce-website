import React, { useState } from "react";
import banner from "../../assects/signup-banner.jpg";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (!savedUsers) {
      alert("No account found! Please sign up.");
      return;
    }
    const foundUser = savedUsers.find(
      (a) => a.email === email && a.password === password
    );

    if (!foundUser) {
      alert("Invalid Email or Password!");
      return;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    alert("Login Successful!");
    navigate("/");
    window.location.reload();
  };
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              type="email"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-400 py-2 outline-none text-gray-700"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-gray-400 w-full border-b border-gray-400 py-2 outline-none"
            />
          </div>
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => {
                handleClick();
                handleLogin();
              }}
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
