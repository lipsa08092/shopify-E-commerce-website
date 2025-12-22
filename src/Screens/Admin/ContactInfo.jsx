import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function ContactInfo() {
  return (
      <div className="p-6 h-full bg-gray-800 text-white">
        <h1 className="text-3xl font-serif font-bold mb-8">
          Contacts Info Management
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* email */}
          <div
            className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20">
                <MdEmail className="text-blue-400 text-xl" />
              </div>
              <h2 className="text-lg font-semibold">Email Address</h2>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-gray-200">
              info@shopify.com
            </div>
          </div>

          {/* phone */}
          <div
            className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500/20">
                <FaPhoneAlt className="text-green-400 text-xl" />
              </div>
              <h2 className="text-lg font-semibold">Phone Number</h2>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-gray-200">
              7845123690
            </div>
          </div>

          {/* whatsApp */}
          <div
            className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/20">
                <FaWhatsapp className="text-emerald-400 text-xl" />
              </div>
              <h2 className="text-lg font-semibold">WhatsApp Number</h2>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-gray-200">
              8455834498
            </div>
          </div>
        </div>
      </div>
  );
}

export default ContactInfo;
