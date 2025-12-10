import React from "react";
import banner from "../../assects/About-banner.jpg";

function BannerSection() {
  return (
    <div className="pl-20 py-10">

      <h1 className="text-gray-500 text-sm sm:text-base mb-10">
        Home / <span className="text-gray-900 ">About</span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10">

        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">Our Story</h2>

          <p className="text-gray-900  mb-4">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data and service solutions, Exclusive has
            10,500 sellers and 300 brands and serves 3 million customers across the
            region.
          </p>

          <p className="text-gray-900 ">
            Exclusive has more than 1 Million products to offer, growing at a very
            fast pace. Exclusive offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={banner}
            alt="About Banner"
            className=" w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
