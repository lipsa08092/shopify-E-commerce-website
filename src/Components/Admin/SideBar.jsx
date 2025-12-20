import { useState } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { FaRegFolder } from "react-icons/fa";
import { IoIosBriefcase } from "react-icons/io";
import { RiBarChart2Line } from "react-icons/ri";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TbCategory } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { RiContactsBookLine } from "react-icons/ri";
import { BsNewspaper } from "react-icons/bs";
import { PiFlagBannerFoldFill } from "react-icons/pi";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeItem, setActiveItem] = useState("dashboard");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div
      className="w-64 h-screen flex flex-col justify-between
      bg-gradient-to-b from-[#3f3f46] to-[#2b2b2f] text-white"
    >
      <ul className="px-3 mt-6 space-y-2">
        {/* Dashboard */}
        <Link
          to="/admin"
          onClick={() => setActiveItem("dashboard")}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium
          ${
            activeItem === "dashboard"
              ? "bg-[#9b94c9]"
              : "text-gray-300 hover:bg-white/10"
          }`}
        >
          <LuLayoutGrid size={18} />
          Dashboard
        </Link>

        {/* Collection */}
        <li>
          <button
            onClick={() => toggleMenu("collection")}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg
            text-gray-300 hover:bg-white/10 transition"
          >
            <div className="flex items-center gap-3">
              <FaRegFolder size={18} />
              Collection
            </div>
            <IoChevronDownOutline
              className={`${
                openMenu === "collection" && "rotate-180"
              } transition duration-300`}
            />
          </button>

          {openMenu === "collection" && (
            <div className="ml-10 mt-2 space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <TbCategory />
                <p className="hover:text-white cursor-pointer">Categories</p>
              </div>
              <div className="flex items-center gap-2">
                <MdProductionQuantityLimits />
                <p className="hover:text-white cursor-pointer">Products</p>
              </div>
              <div className="flex items-center gap-2">
                <BiSolidOffer />
                <p className="hover:text-white cursor-pointer">Offers</p>
              </div>
            </div>
          )}
        </li>

        {/* Career */}
        <li>
          <button
            onClick={() => toggleMenu("career")}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg
            text-gray-300 hover:bg-white/10 transition"
          >
            <div className="flex items-center gap-3">
              <IoIosBriefcase size={18} />
              Career
            </div>
            <IoChevronDownOutline
              className={`${openMenu === "career" && "rotate-180"} transition`}
            />
          </button>
        </li>

        {/* Marketing */}
        <li>
          <button
            onClick={() => toggleMenu("marketing")}
            className=" w-full flex items-center justify-between  gap-3 px-4 py-3 rounded-lg
            text-gray-300 hover:bg-white/10 cursor-pointer transition"
          >
            <div className="flex items-center gap-3">
              <PiFlagBannerFoldFill size={18} />
              Marketing
            </div>
            <IoChevronDownOutline
              className={`${openMenu === "marketing" && "rotate-180"} transition duration-300`}
            />
          </button>
          {openMenu === "marketing" && (
            <div className="ml-10 mt-2 space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MdMessage />
                <p className="hover:text-white cursor-pointer">Testimonials</p>
              </div>
              <div className="flex items-center gap-2">
                <GrGallery />
                <p className="hover:text-white cursor-pointer">Gallery</p>
              </div>
            </div>
          )}
        </li>

        {/* Insights */}
        <li>
          <button
            onClick={() => toggleMenu("insights")}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg
            text-gray-300 hover:bg-white/10 transition"
          >
            <div className="flex items-center gap-3">
              <RiBarChart2Line size={18} />
              Insights
            </div>
            <IoChevronDownOutline
              className={`${
                openMenu === "insights" && "rotate-180"
              } transition duration-300`}
            />
          </button>
          {openMenu === "insights" && (
            <div className="ml-10 mt-2 space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <BsNewspaper />
                <p className="hover:text-white cursor-pointer">News & Blogs</p>
              </div>
              <div className="flex items-center gap-2">
                <RiContactsBookLine />
                <p className="hover:text-white cursor-pointer">Contact Info</p>
              </div>
            </div>
          )}
        </li>

      </ul>
      <div className="p-4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/012/104/191/original/group-of-color-shopping-bags-isolated-png.png"
          alt="illustration"
          className="w-full h-96 object-contain opacity-90"
        />
      </div>
    </div>
  );
};

export default Sidebar;
