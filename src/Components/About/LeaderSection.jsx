import React from "react";
import image1 from "../../assects/Image-1.png";
import image2 from "../../assects/Image-2.png";
import image3 from "../../assects/Image-3.png";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";

function LeaderSection() {
  const leader = [
    {
      id: 1,
      img: image1,
      name: "Tom Cruise",
      position: "Founder & chairman",
    },
    {
      id: 2,
      img: image2,
      name: "Emma Watson",
      position: "Managing Director",
    },
    {
      id: 3,
      img: image3,
      name: "Will Smith",
      position: "ProductDesigner",
    },
  ];
  return (
    <div className="py-20 px-5 sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {leader.map((item) => (
          <div key={item.id} className="text-left">
            <div className="bg-gray-100 rounded-lg overflow-hidden w-full h-[380px] flex items-center justify-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold mt-5">
              {item.name}
            </h1>
            <p className="text-sm sm:text-base text-gray-700 mt-1">
              {item.position}
            </p>
            <div className="flex gap-5 mt-4 text-xl text-black">
              <LuTwitter className="cursor-pointer hover:text-blue-400" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <RiLinkedinLine className="cursor-pointer hover:text-blue-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderSection;
