import React, { useEffect, useState } from "react";

function Account() {
  const [data, setData] = useState({});

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    console.log(savedUser);
    setData(savedUser);
  }, []);

  return (
    <div className="mx-4 sm:mx-10 lg:mx-20 py-10 lg:py-16">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-500 text-sm mb-10">
          Home / <span className="text-gray-900 font-medium">My Account</span>
        </h1>
        <p className="text-sm mb-10">
          Welcome!
          <span className="text-red-600 text-sm">Name:{data.name}</span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mt-8">
        {/* left side */}
        <div className="lg:w-1/4 w-full space-y-8">
          <div>
            <h1 className="font-semibold text-gray-900 mb-2">
              Manage My Account
            </h1>
            <p className="text-red-600 cursor-pointer pl-8">My Profile</p>
            <p className="text-gray-600 cursor-pointer hover:text-black pl-8">
              Address Book
            </p>
            <p className="text-gray-600 cursor-pointer hover:text-black pl-8">
              My Payment Options
            </p>
          </div>

          <div>
            <h1 className="font-semibold text-gray-900 mb-2">My Orders</h1>
            <p className="text-gray-600 cursor-pointer hover:text-black pl-8">
              My Returns
            </p>
            <p className="text-gray-600 cursor-pointer hover:text-black pl-8">
              My Cancellations
            </p>
          </div>

          <div>
            <h1 className="font-semibold text-gray-900 mb-2">My Wishlist</h1>
          </div>
        </div>

        {/* right side form */}
        <div className="lg:w-3/4 w-full bg-white shadow-md rounded-lg p-6 sm:p-10">
          <h1 className="text-2xl font-semibold text-red-600 mb-6">
            Edit Your Profile
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium">First Name</label>
              <input
                type="text"
                className="w-full mt-1 border border-gray-300 p-3 rounded-md text-sm"
                placeholder="First Name"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Last Name</label>
              <input
                type="text"
                className="w-full mt-1 border border-gray-300 p-3 rounded-md text-sm"
                placeholder="Last Name"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 border border-gray-300 p-3 rounded-md text-sm"
                placeholder="yourmail@gmail.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Address</label>
              <input
                type="text"
                className="w-full mt-1 border border-gray-300 p-3 rounded-md text-sm"
                placeholder="City, Country"
              />
            </div>
          </div>
          <h2 className="mt-8 mb-4 font-medium">Password Changes</h2>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full border border-gray-300 p-3 rounded-md text-sm"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full border border-gray-300 p-3 rounded-md text-sm"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full border border-gray-300 p-3 rounded-md text-sm"
            />
          </div>

          <div className="flex justify-end items-center gap-4 mt-8">
            <button className="text-gray-800 hover:text-black">Cancel</button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
