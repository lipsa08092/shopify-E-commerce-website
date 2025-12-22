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
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  const day = currentTime.toLocaleDateString("en-US", { weekday: "long" });
  const fullDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = currentTime.toLocaleTimeString("en-US");

  return (
    <div
      className="relative min-h-screen bg-cover bg-center px-6 py-10"
      style={{
        backgroundImage:
          "url('https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 ">
        <h1 className="text-3xl font-bold text-white font-serif">
          Welcome to Shopify
        </h1>
        <p className="text-gray-300 pb-6">Here's what's happening today</p>

        {/* Date / Time Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-4 p-5 rounded-xl  backdrop-blur-xl bg-black/30 border border-white/20 text-white shadow-lg">
            <div className="p-3 rounded-lg bg-white/20">
              <SlCalender className="text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-gray-200">Today is</p>
              <h2 className="text-xl font-bold">{day}</h2>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-xl  backdrop-blur-xl bg-black/30 border border-white/20 text-white shadow-lg">
            <div className="p-3 rounded-lg bg-white/20">
              <SlCalender className="text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-gray-200">Date</p>
              <h2 className="text-xl font-bold">{fullDate}</h2>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-xl  backdrop-blur-xl bg-black/30 border border-white/20 text-white shadow-lg">
            <div className="p-3 rounded-lg bg-white/20">
              <FaRegClock className="text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-gray-200">Current Time</p>
              <h2 className="text-xl font-bold">{time}</h2>
            </div>
          </div>
        </div>

        {/* products categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-4 p-5 rounded-xl backdrop-blur-xl bg-black/20 border border-white/20 text-white">
            <div className="p-3 rounded-lg bg-green-500/50">
              <FiTag size={24} className="text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-200">Total Categories</p>
              <h2 className="text-xl font-bold">6</h2>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-xl  backdrop-blur-xl bg-black/20 border border-white/20 text-white">
            <div className="p-3 rounded-lg bg-blue-500/50">
              <FiBox size={24} className="text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-200">Total Products</p>
              <h2 className="text-xl font-bold">16</h2>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-xl  backdrop-blur-xl bg-black/20 border border-white/20 text-white">
            <div className="p-3 rounded-lg bg-purple-500/50">
              <FiMessageSquare size={24} className="text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-200">General Inquiries</p>
              <h2 className="text-xl font-bold">50</h2>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 rounded-xl  backdrop-blur-xl bg-black/20 border border-white/20 text-white">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white">
            <div className="flex gap-2 mb-6">
              <FaRegCalendarCheck className="mt-2 text-xl" />
              <h2 className="text-2xl font-semibold">Quick Actions</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                onClick={() => {
                  navigate("/admin/categories")
                  handleClick();
                }}
                className="h-24 flex flex-col items-center justify-center rounded-xl bg-black/30 border border-white/20 text-md font-medium text-gray-200 hover:bg-white/20 cursor-pointer"
              >
                <BiSolidCategory size={20} />
                <p> All Categories</p>
              </div>
              <div 
              onClick={() => {navigate("/admin/products")
                handleClick();
              }}
              className="h-24 flex flex-col items-center justify-center rounded-xl bg-black/30 border border-white/20 text-md font-medium text-gray-200 hover:bg-white/20 cursor-pointer">
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
    </div>
  );
};

export default Dashboard;
