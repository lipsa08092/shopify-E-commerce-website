import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp, FaEdit } from "react-icons/fa";

function ContactInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const [contact, setContact] = useState({
    email: "info@shopify.com",
    phone: "7845123690",
    whatsapp: "8455834498",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("contactInfo"));
    if (saved) setContact(saved);
  }, []);
  const handleSave = () => {
    localStorage.setItem("contactInfo", JSON.stringify(contact));
    setIsOpen(false);
  };

  return (
    <div className="p-4 sm:p-6 min-h-full bg-blue-950 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold">
          Contact Info Management
        </h1>

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm"
        >
          <FaEdit />
          Edit
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Email */}
        <div className="bg-black/40 border border-white/20 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500/20 rounded-full">
              <MdEmail size={20} className="text-blue-400" />
            </div>
            <h2 className="text-lg">Email Address</h2>
          </div>
          <p className="bg-white/10 rounded px-3 py-2 text-md">
            {contact.email}
          </p>
        </div>

        {/* Phone */}
        <div className="bg-black/40 border border-white/20 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 flex items-center justify-center bg-green-400/20 rounded-full">
              <FaPhoneAlt size={20} className="text-green-400" />
            </div>
            <h2 className="text-lg">Phone Number</h2>
          </div>
          <p className="bg-white/10 rounded px-3 py-2 text-md">
            {contact.phone}
          </p>
        </div>

        {/* WhatsApp */}
        <div className="bg-black/40 border border-white/20 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 flex items-center justify-center bg-green-400/20 rounded-full">
              <FaWhatsapp size={24} className="text-green-400" />
            </div>
            <h2 className="text-lg">WhatsApp Number</h2>
          </div>
          <p className="bg-white/10 rounded px-3 py-2 text-md">
            {contact.whatsapp}
          </p>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-gray-900 w-full max-w-md rounded-xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold mb-4">
              Edit Contact Information
            </h2>

            {/* Email input */}
            <div className="mb-3">
              <label className="block text-sm mb-1">Email</label>
              <input
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-gray-800 border border-white/20 text-white"
              />
            </div>

            {/* Phone input */}
            <div className="mb-3">
              <label className="block text-sm mb-1">Phone</label>
              <input
                value={contact.phone}
                onChange={(e) =>
                  setContact({ ...contact, phone: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-gray-800 border border-white/20 text-white"
              />
            </div>

            {/* WhatsApp */}
            <div className="mb-4">
              <label className="block text-sm mb-1">WhatsApp</label>
              <input
                value={contact.whatsapp}
                onChange={(e) =>
                  setContact({ ...contact, whatsapp: e.target.value })
                }
                className="w-full px-3 py-2 rounded bg-gray-800 border border-white/20 text-white"
              />
            </div>

            <div className="flex justify-end gap-3">
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
}

export default ContactInfo;
