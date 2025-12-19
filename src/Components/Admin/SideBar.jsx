import { LuLayoutGrid } from "react-icons/lu";
import { FaRegFolder } from "react-icons/fa";
import { IoIosBriefcase } from "react-icons/io";
import { IoMegaphoneOutline } from "react-icons/io5";
import { RiBarChart2Line } from "react-icons/ri";
import { IoChevronDownOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div
      className="w-64 h-full flex flex-col justify-between bg-gradient-to-b backdrop-blur-sm from-[#3f3f46] to-[#2b2b2f] text-white"
    >
      <div>
        {/* menu */}
        <ul className="px-3 mt-4 space-y-2">
          {/* Dashboard */}
          <li
            className="flex items-center gap-3 px-4 py-3 rounded-lg
            bg-gradient-to-r from-[#978faf] to-[#9992b9] cursor-pointer"
          >
            <LuLayoutGrid size={18} />
            <span className="font-medium">Dashboard</span>
          </li>

          {/* Collection */}
          <li
            className="flex items-center justify-between px-4 py-3 rounded-lg
            text-gray-300 hover:bg-white/10 cursor-pointer transition"
          >
            <div className="flex items-center gap-3">
              <FaRegFolder size={18} />
              <span>Collection</span>
            </div>
            <IoChevronDownOutline size={16} />
          </li>

          {/* Career */}
          <li
            className="flex items-center justify-between px-4 py-3 rounded-lg
            text-gray-300 hover:bg-white/10 cursor-pointer transition"
          >
            <div className="flex items-center gap-3">
              <IoIosBriefcase size={18} />
              <span>Career</span>
            </div>
            <IoChevronDownOutline size={16} />
          </li>

          {/* Marketing */}
          <li
            className="flex items-center gap-3 px-4 py-3 rounded-lg
            text-gray-300 hover:bg-white/10 cursor-pointer transition"
          >
            <IoMegaphoneOutline size={18} />
            <span>Marketing</span>
          </li>

          {/* Insights */}
          <li
            className="flex items-center justify-between px-4 py-3 rounded-lg
            text-gray-300 hover:bg-white/10 cursor-pointer transition"
          >
            <div className="flex items-center gap-3">
              <RiBarChart2Line size={18} />
              <span>Insights</span>
            </div>
            <IoChevronDownOutline size={16} />
          </li>
        </ul>
      </div>

      <div className="p-4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/012/104/191/original/group-of-color-shopping-bags-isolated-png.png"
          alt="illustration"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Sidebar;
