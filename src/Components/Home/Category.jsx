import React, { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { LuCamera } from "react-icons/lu";
import { FiHeadphones } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";

function Category() {
  const [active, setActive] = useState("Camera");

  const categories = [
    {
      name: "Phones",
      icon: <HiOutlineDevicePhoneMobile className="text-4xl" />,
    },
    {
      name: "Computers",
      icon: <HiOutlineDesktopComputer className="text-4xl" />,
    },
    { name: "SmartWatch", icon: <BsSmartwatch className="text-4xl" /> },
    { name: "Camera", icon: <LuCamera className="text-4xl" /> },
    { name: "HeadPhones", icon: <FiHeadphones className="text-4xl" /> },
    { name: "Gaming", icon: <IoGameControllerOutline className="text-4xl" /> },
  ];

  return (
    <div className="py-20 mx-20 border-b">
      <div>
        <div className="flex gap-3 items-center">
          <div className="w-4 h-10 rounded-md bg-red-600"></div>
          <p className="text-red-600 font-bold">Categories</p>
        </div>

        <div className="flex justify-between items-center mt-3">
          <h1 className="text-4xl font-semibold">Browse By Category</h1>

          <div className="flex gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
              <FaArrowLeftLong />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
              <FaArrowRightLong />
            </div>
          </div>
        </div>

        {/*  Boxes */}
        <div className="flex justify-between items-center mt-14">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`w-40 h-40 flex flex-col items-center justify-center gap-3 border rounded-lg cursor-pointer transition-all duration-300
                ${
                  active === cat.name
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-black border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              {cat.icon}
              <p className="text-sm font-medium text-gray">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
