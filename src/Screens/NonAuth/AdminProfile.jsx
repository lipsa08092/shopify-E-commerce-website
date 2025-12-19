import React from "react";

const AdminProfile = () => {
  const admin = JSON.parse(localStorage.getItem("loggedAdmin"));

  if (!admin) {
    return <p className="p-6">No Admin Data Found</p>;
  }

  return (
    <div className="p-10 flex justify-center">
      <div className="w-full max-w-5xl bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl text-white flex overflow-hidden shadow-xl">

        {/* Left Profile */}
        <div className="w-1/3 bg-black/20 flex flex-col items-center justify-center p-8">
          <img
            src={admin.avatar}
            alt="Admin"
            className="w-28 h-28 rounded-full border-4 border-white mb-4"
          />
          <h2 className="text-xl font-semibold">{admin.name}</h2>
          <p className="opacity-80">Administrator</p>
        </div>

        {/* Right Info */}
        <div className="w-2/3 p-8">
          <h3 className="text-2xl mb-6 border-b border-white/30 pb-2">
            Personal Information
          </h3>

          <div className="grid grid-cols-2 gap-y-6 gap-x-10">
            <div>
              <p className="opacity-70 text-sm">Full Name</p>
              <p>{admin.name}</p>
            </div>

            <div>
              <p className="opacity-70 text-sm">Email Address</p>
              <p>{admin.email}</p>
            </div>

            <div>
              <p className="opacity-70 text-sm">Phone Number</p>
              <p>{admin.phone}</p>
            </div>

            <div>
              <p className="opacity-70 text-sm">Gender</p>
              <p className="capitalize">{admin.gender}</p>
            </div>

            <div className="col-span-2">
              <p className="opacity-70 text-sm">Address</p>
              <p>{admin.address}</p>
            </div>
          </div>

          <button className="mt-8 px-6 py-2 rounded-full border border-white/50 hover:bg-white hover:text-black transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
