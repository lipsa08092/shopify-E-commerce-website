import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";

export default function FastDelivery() {
  return (
    <div className="py-20 mx-5 sm:mx-10 lg:mx-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {/* Free Delivery */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-3xl">
              <TbTruckDelivery />
            </div>
          </div>
          <h2 className="text-lg font-bold tracking-wide">
            FREE AND FAST DELIVERY
          </h2>
          <p className="text-sm text-black">
            Free delivery for all orders over $140
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-3xl">
              <RiCustomerServiceLine />
            </div>
          </div>
          <h2 className="text-lg font-bold tracking-wide">
            24/7 CUSTOMER SERVICE
          </h2>
          <p className="text-sm text-black">
            Friendly 24/7 customer support
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-3xl">
              <BsShieldCheck />
            </div>
          </div>
          <h2 className="text-lg font-bold tracking-wide">
            MONEY BACK GUARANTEE
          </h2>
          <p className="text-sm text-black">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
}
