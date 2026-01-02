import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { FiTag, FiBox, FiMessageSquare, FiUsers } from "react-icons/fi";
import { BiSolidCategory } from "react-icons/bi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { PiTeaBagFill } from "react-icons/pi";
import { IoGiftSharp } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FcSalesPerformance } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const day = currentTime.toLocaleDateString("en-US", { weekday: "long" });
  const fullDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = currentTime.toLocaleTimeString("en-US");

  return (
    <div className="p-4 md:p-6 bg-blue-950 text-white">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-serif mb-2">
            Welcome to <span className="text-green-500">Shopify</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-md">
            Here's what's happening today
          </p>
        </div>

        {/* Date / Time Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-auto">
          <div className="flex items-center gap-4 px-6 py-2 rounded-xl  backdrop-blur-xl bg-black/30 border border-white/20 text-white">
            <div className="p-3 rounded-lg bg-white/20">
              <SlCalender className="text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-gray-200">Today is</p>
              <h2 className="text-xl font-bold">{day}</h2>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-2 rounded-xl  backdrop-blur-xl bg-black/30 border border-white/20 text-white shadow-lg">
            <div className="p-3 rounded-lg bg-white/20">
              <SlCalender className="text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-gray-200">Date</p>
              <h2 className="text-lg md:text-xl font-bold break-words">
                {fullDate}
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-2 rounded-xl  backdrop-blur-xl bg-black/30 border border-white/20 text-white shadow-lg">
            <div className="p-3 rounded-lg bg-white/20">
              <FaRegClock className="text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-gray-200">Current Time</p>
              <h2 className="text-xl font-bold">{time}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* products categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="flex items-center gap-4 p-5 rounded-xl backdrop-blur-xl bg-black/30 border border-white/20 text-white">
          <div className="p-3 rounded-lg bg-green-500/50">
            <FiTag size={24} className="text-green-500" />
          </div>
          <div>
            <p className="text-sm text-gray-200">Total Categories</p>
            <h2 className="text-xl font-bold">6</h2>
          </div>
        </div>
        <div className="flex items-center gap-4 p-5 rounded-xl  backdrop-blur-xl bg-black/30 border border-white/20 text-white">
          <div className="p-3 rounded-lg bg-blue-500/50">
            <FiBox size={24} className="text-blue-500" />
          </div>
          <div>
            <p className="text-sm text-gray-200">Total Products</p>
            <h2 className="text-xl font-bold">16</h2>
          </div>
        </div>
        <div className="flex items-center gap-4 p-5 rounded-xl  backdrop-blur-xl bg-black/30 border border-white/20 text-white">
          <div className="p-3 rounded-lg bg-purple-500/50">
            <FiMessageSquare size={24} className="text-purple-500" />
          </div>
          <div>
            <p className="text-sm text-gray-200">General Inquiries</p>
            <h2 className="text-xl font-bold">50</h2>
          </div>
        </div>
        <div className="flex items-center gap-4 p-5 rounded-xl  backdrop-blur-xl bg-black/30 border border-white/20 text-white">
          <div className="p-3 rounded-lg bg-orange-500/50">
            <FiUsers size={24} className="text-orange-500" />
          </div>
          <div>
            <p className="text-sm text-gray-200">Bot Inquiries</p>
            <h2 className="text-xl font-bold">19</h2>
          </div>
        </div>
      </div>
      
      {/* Quick Actions & Best Selling Products */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
        <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white">
          <div className="flex gap-2 mb-6">
            <FaRegCalendarCheck className="mt-2 text-xl" />
            <h2 className="text-2xl font-semibold">Quick Actions</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div
              onClick={() => {
                navigate("/admin/categories");
                handleClick();
              }}
              className="h-24 flex flex-col items-center justify-center rounded-xl bg-black/30 border border-white/20 text-md font-medium text-gray-200 hover:bg-white/20 cursor-pointer"
            >
              <BiSolidCategory size={20} />
              <p> All Categories</p>
            </div>
            <div
              onClick={() => {
                navigate("/admin/products");
                handleClick();
              }}
              className="h-24 flex flex-col items-center justify-center rounded-xl bg-black/30 border border-white/20 text-md font-medium text-gray-200 hover:bg-white/20 cursor-pointer"
            >
              <RiShoppingBag3Fill size={20} />
              <p> All product</p>
            </div>
            <div className="h-24 flex flex-col items-center justify-center rounded-xl bg-black/30 border border-white/20 text-md font-medium text-gray-200 hover:bg-white/20  cursor-pointer">
              <PiTeaBagFill size={20} />
              <p> All Inquiries</p>
            </div>
            <div className="h-24 flex flex-col items-center justify-center rounded-xl bg-black/30 border border-white/20 text-md font-medium text-gray-200 hover:bg-white/20  cursor-pointer">
              <IoGiftSharp size={20} />
              <p> All Offers</p>
            </div>
          </div>
        </div>

        {/*best selling products */}
        <div className="bg-black/30 lg:col-span-2 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white">
          <div className="flex gap-2 mb-4">
            <FcSalesPerformance className="mt-1 text-2xl" />
            <h2 className="text-2xl font-semibold">Best Selling Products</h2>
          </div>

          <div className="grid grid-cols-4 bg-gray-600 rounded-lg p-4 text-sm text-gray-300 pb-3 text-center border-b border-white/20">
            <p>Product Name</p>
            <p>Category</p>
            <p>Quantity</p>
            <p>Rating</p>
          </div>
          <div className="grid grid-cols-4 p-4 text-sm text-center border-b border-white/10">
            <p className="text-orange-400">Keyboard</p>
            <p>Electronics</p>
            <p>23</p>
            <p>4.5 </p>
          </div>
          <div className="grid grid-cols-4 p-4 text-sm text-center border-b border-white/10">
            <p className="text-orange-400">Gucci duffle Bag</p>
            <p>Bag</p>
            <p>10</p>
            <p>4.7</p>
          </div>
          <div className="grid grid-cols-4 p-4 text-sm text-center border-b border-white/10">
            <p className="text-orange-400">Quilted Satin Jacket</p>
            <p>Fashion</p>
            <p>39</p>
            <p>4.8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
