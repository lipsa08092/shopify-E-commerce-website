import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { LuMail } from "react-icons/lu";

function Contact() {
  return (
    <div className="py-20 px-5 sm:px-10 lg:px-20">
      <h1 className="text-gray-500 text-sm sm:text-base mb-10">
        Home / <span className="text-gray-900 font-medium">Contact</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Box */}
        <div className=" shadow-md p-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <FiPhoneCall size={20} />
              </div>
              <h2 className="text-lg font-semibold">Call To Us</h2>
            </div>

            <p className="text-black text-sm">
              We are available 24/7, 7 days a week.
            </p>

            <p className="text-black text-sm">
              Phone: +8801611112222
            </p>
            <hr />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <LuMail size={20} />
              </div>
              <h2 className="text-lg font-semibold">Write To Us</h2>
            </div>

            <p className="text-black text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>

            <p className="text-black text-sm">
              Emails: customer@shopify.com
            </p>

            <p className="text-black text-sm ">
              Emails: support@shopify.com
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-2 shadow-md p-6">
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="border rounded-md px-4 py-2 w-full bg-gray-100 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="border rounded-md px-4 py-2 w-full bg-gray-100 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="border rounded-md px-4 py-2 w-full bg-gray-100 focus:outline-none"
              />
            </div>
            <textarea
              rows="6"
              placeholder="Your Message"
              className="border rounded-md px-4 py-3 w-full bg-gray-100 focus:outline-none"
            ></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition"
              >
                Send Massage
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
