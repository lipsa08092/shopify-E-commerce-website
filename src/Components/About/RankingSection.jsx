import { useState } from "react";
import React from "react";
import { BiSolidStoreAlt } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { FaPiggyBank } from "react-icons/fa";

function RankingSection() {
  const [active, setActive] = useState(2);
  const status = [
    {
      id: 1,
      icon: <BiSolidStoreAlt size={28} />,
      value: "10.5k",
      label: "Sellers active on our site",
    },
    {
      id: 2,
      icon: <RiMoneyDollarCircleLine size={32} />,
      value: "33k",
      label: "Monthly Product Sale",
    },
    {
      id: 3,
      icon: <FiShoppingBag size={28} />,
      value: "45.5k",
      label: "Customer active on our site",
    },
    {
      id: 4,
      icon: <FaPiggyBank size={30} />,
      value: "25k",
      label: "Annual gross sale in our site",
    },
  ];

  return (
    <div className="mx-5 sm:mx-10 lg:mx-20 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {status.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`border  p-6 cursor-pointer transition-all duration-300 
                        flex flex-col items-center text-center shadow-sm
              ${
                active === item.id
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }
            `}
          >
            <div
              className={`
                w-20 h-20 rounded-full flex items-center justify-center
                ${
                  active === item.id
                    ? "bg-white text-black"
                    : "bg-gray-300 text-black"
                }
              `}
            >
              <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            <h2
              className={`text-3xl font-bold mt-4 ${
                active === item.id ? "text-white" : "text-black"
              }`}
            >
              {item.value}
            </h2>

            <p
              className={`text-sm mt-1 ${
                active === item.id ? "text-white" : "text-gray-600"
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RankingSection;
