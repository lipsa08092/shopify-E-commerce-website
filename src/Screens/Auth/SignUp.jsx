import React, { useState } from "react";
import banner from "../../assects/signup-banner.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const data={
        name, email,password
    }
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    localStorage.setItem("user", JSON.stringify(data));
    alert("Account Created Successfully!");
    navigate("/");
  };

  return (
    <div className="pr-20 py-10">
      <div className="flex flex-col lg:flex-row items-center  gap-28">
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={banner}
            alt="signup Banner"
            className=" w-full lg:max-w-full h-[550px] object-cover"
          />
        </div>

        <div className=" w-full lg:w-1/2 ">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Create an Account
          </h1>
          <p className="text-gray-900 mb-6">Enter Your details below</p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b border-gray-400 py-2 outline-none text-gray-700"
            />
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
          <button
            onClick={handleSignup}
            className="w-full mt-6 py-3 bg-red-600 text-white rounded-sm text-sm font-medium hover:bg-red-700 transition"
          >
            Create Account
          </button>
          <button className="w-full mt-4 py-3 border rounded-sm border-gray-400 flex items-center justify-center gap-3 hover:bg-gray-100 transition">
            <FcGoogle className="text-xl" />
            <span>Sign up with Google</span>
          </button>
          <div className="flex flex-col items-center justify-center mt-4">
            <p className="text-gray-600 text-center">
              Already have an account?
              <Link
                to="/login"
                className="underline text-gray-700 hover:text-gray-800 cursor-pointer ml-1"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
