import { FaRegBell } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { RiUser3Fill } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("loggedAdmin");
    navigate("/admin-login");
  };

  return (
    <div className="relative h-16 w-full flex items-center justify-between px-6 bg-gradient-to-r from-[#8f7ccf] to-[#9b8fcf]">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://www.pngall.com/wp-content/uploads/13/Shopify-Logo-PNG-File.png"
          alt="shopify"
          className="h-16 w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="items-center bg-[#7c6ab8] px-2 py-2 rounded-full cursor-pointer">
          <FaRegBell size={18} />
        </div>

        <div className="items-center bg-[#7c6ab8] px-2 py-2 rounded-full cursor-pointer">
          <IoIosMail size={18} />
        </div>

        <div className="items-center bg-[#7c6ab8] px-2 py-2 rounded-full cursor-pointer">
          <IoSettings size={18} />
        </div>

        <div className="items-center bg-[#7c6ab8] px-2 py-2 rounded-full cursor-pointer">
          <IoMdHelpCircle size={18} />
        </div>

        {/* Profile */}
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-[#7c6ab8] px-3 py-1 rounded-full cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <RiUser3Fill />
            </div>

            {open ? (
              <IoChevronUp size={16} className="text-white" />
            ) : (
              <IoChevronDown size={16} className="text-white" />
            )}
          </div>

          {/* Dropdown */}
          {open && (
            <div className="absolute z-20 right-0 mt-2 w-44 bg-[#4f32c2] rounded-xl ">
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/admin/profile");
                }}
                className="flex items-center w-full gap-2 px-4 py-2 text-white hover:bg-[#6a58bb] rounded-xl"
              >
                <CgProfile size={16} />
                <span>Profile</span>
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center w-full gap-2 px-4 py-2 text-white hover:bg-[#6a58bb] rounded-xl"
              >
                <FaSignOutAlt size={16} />
                <span>Sign out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
