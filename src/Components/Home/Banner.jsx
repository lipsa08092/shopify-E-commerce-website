import React from "react";
import JBL from "../../assects/jbl-speaker.png";

function Banner() {
  return (
    <div className="mx-4 sm:mx-10 lg:mx-20 py-10 lg:py-20">
      <div className="relative w-full bg-black p-6 sm:p-10 lg:p-16  lg:h-96 flex flex-col lg:flex-row justify-between items-center ">
        
        <div className="text-white space-y-4 lg:space-y-5 sm:space-y-10 text-center lg:text-left">
          <p className="text-green-500 text-sm font-semibold">Categories</p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold ">
            Enhance Your <br /> Music Experience
          </h1>
          <div className="flex justify-center lg:justify-start gap-3">
            {[
              { num: "05", label: "Days" },
              { num: "23", label: "Hours" },
              { num: "19", label: "Minutes" },
              { num: "56", label: "Seconds" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-3 rounded-full text-black bg-white w-16"
              >
                <h2 className="text-xl font-bold">{item.num}</h2>
                <p className="text-gray-600 text-xs">{item.label}</p>
              </div>
            ))}
          </div>

          <button className="text-white py-2 px-6 text-sm rounded-lg bg-green-500 mt-3">
            Buy Now
          </button>
        </div>

        <div>
          <img
            src={JBL}
            alt="jbl"
            className="w-80 sm:w-[700px] lg:w-[600px] object-cover scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
