import { Bell, Mail, Settings, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../../assects/Shopify-logo.png";
import { RiUser3Fill } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("loggedAdmin");
    navigate("/admin-login");
  };

  return (
    <div
      className="relative h-16 w-full flex items-center justify-between px-6
      bg-gradient-to-r from-[#8f7ccf] to-[#9b8fcf] shadow"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Prime" className="h-10 w-auto" />
      </div>

      <div className="flex items-center gap-4">
        <div className="items-center bg-[#7c6ab8] px-2 py-2 rounded-full cursor-pointer">
          <div className="w-5 h-5 rounded-full items-center justify-center text-white font-semibold">
            <Bell size={18} />
          </div>
        </div>

        <div className="items-center bg-[#7c6ab8] px-2 py-2 rounded-full cursor-pointer">
          <div className="w-5 h-5 rounded-full items-center justify-center text-white font-semibold">
            <Mail size={18} />
          </div>
        </div>

        <div className="items-center bg-[#7c6ab8] px-2 py-2 rounded-full cursor-pointer">
          <div className="w-5 h-5 rounded-full items-center justify-center text-white font-semibold">
            <Settings size={18} />
          </div>
        </div>

        <div className="items-center bg-[#7c6ab8] px-2 py-2 rounded-full cursor-pointer">
          <div className="w-5 h-5 rounded-full items-center justify-center text-white font-semibold">
            <HelpCircle size={18} />
          </div>
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
            <ChevronDown size={16} className="text-white" />
            <ChevronUp/>
          </div>

          {/* dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-[#3c2f70] rounded-xl shadow-lg overflow-hidden z-50">
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/admin/profile");
                }}
                className="w-full px-4 py-2 text-left text-white hover:bg-[#524781]"
              >
                <CgProfile/>
                Profile
              </button>

              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-white hover:bg-[#524781]"
              ><FaSignOutAlt/>
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
