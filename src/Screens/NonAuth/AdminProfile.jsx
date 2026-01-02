import React, { useEffect, useState } from "react";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("loggedAdmin"));
    if (saved) setAdmin(saved);
  }, []);

  if (!admin) {
    return <p className="p-6">No Admin Data Found</p>;
  }

  const handleSave = () => {
    localStorage.setItem("loggedAdmin", JSON.stringify(admin));

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.id === admin.id ? admin : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setIsOpen(false);
  };

  return (
    <div className="p-4 sm:p-10 bg-blue-950 min-h-screen">
      <div className="w-full md:h-96 bg-black/50 rounded-2xl text-white overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-gray-900 flex flex-col items-center justify-center p-6">
          <img
            src={admin.avatar}
            alt="Admin"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-gray-100 mb-4"
          />
          <h2 className="text-xl font-semibold">{admin.name}</h2>
          <p className="opacity-80">Administrator</p>
        </div>

        <div className="md:w-2/3 p-6 sm:p-8 bg-gray-700/40">
          <h3 className="text-xl sm:text-2xl mb-6 border-b border-white/30 pb-2">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
            <div>
              <p className="text-gray-300 text-sm font-medium">Full Name</p>
              <p>{admin.name}</p>
            </div>

            <div>
              <p className="text-gray-300 text-sm font-medium">Email</p>
              <p>{admin.email}</p>
            </div>

            <div>
              <p className="text-gray-300 text-sm font-medium">Phone</p>
              <p>{admin.phone}</p>
            </div>

            <div>
              <p className="text-gray-300 text-sm font-medium">Gender</p>
              <p className="capitalize">{admin.gender}</p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-gray-300 text-sm font-medium">Address</p>
              <p>{admin.address}</p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="mt-8 px-6 py-2 rounded-full border border-white/50 hover:bg-white hover:text-black transition"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
          <div className="bg-gray-900 w-full max-w-md rounded-xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

            <div className="space-y-3">
              <input
                value={admin.name}
                onChange={(e) => setAdmin({ ...admin, name: e.target.value })}
                placeholder="Full Name"
                className="w-full px-3 py-2 rounded bg-gray-800 border border-white/20"
              />

              <input
                value={admin.email}
                onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
                placeholder="Email"
                className="w-full px-3 py-2 rounded bg-gray-800 border border-white/20"
              />

              <input
                value={admin.phone}
                onChange={(e) => setAdmin({ ...admin, phone: e.target.value })}
                placeholder="Phone"
                className="w-full px-3 py-2 rounded bg-gray-800 border border-white/20"
              />

              <select
                value={admin.gender}
                onChange={(e) => setAdmin({ ...admin, gender: e.target.value })}
                className="w-full px-3 py-2 rounded bg-gray-800 border border-white/20"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <textarea
                value={admin.address}
                onChange={(e) =>
                  setAdmin({ ...admin, address: e.target.value })
                }
                placeholder="Address"
                rows="3"
                className="w-full px-3 py-2 rounded bg-gray-800 border border-white/20"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 text-sm"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-sm"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
