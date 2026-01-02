import Sidebar from "../Components/Admin/SideBar";
import Topbar from "../Components/Admin/TopBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-gray-900 text-white">
      <Topbar />
      {/*body*/}
      <div className="flex overflow-hidden">
        <Sidebar />
        {/* main content */}
        <div className="flex-1 overflow-y-auto"><Outlet /></div>
      </div>
    </div>
  );
};

export default AdminLayout;
