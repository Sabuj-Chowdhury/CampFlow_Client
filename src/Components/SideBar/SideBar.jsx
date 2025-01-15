import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { IoMdAddCircleOutline, IoMdListBox } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdManageSearch } from "react-icons/md";
import { FaReceipt, FaTasks } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SideBar = () => {
  const { logOut } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onLogout = async () => {
    await logOut();
    navigate("/");
  };

  // for now making Admin
  const isAdmin = false;

  return (
    <aside
      className={`bg-teal-800 text-white h-screen sticky top-0 transition-width duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Sidebar Header */}
      <div
        className="flex items-center justify-between p-4 border-b border-teal-500"
        onClick={toggleSidebar}
      >
        <h1 className={`text-2xl font-bold ${isCollapsed && "hidden"}`}>
          CampFlow
        </h1>
        <button className="text-white hover:bg-teal-600 p-2 rounded">
          {isCollapsed ? "➤" : "⟨"}
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className="flex flex-col gap-2 p-4">
        {isAdmin ? (
          // {/* Admin Links */}
          <div>
            {/* add campaign */}
            <NavLink
              to="/dashboard/add-camp"
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded hover:bg-teal-600 ${
                  isActive ? "bg-teal-500" : ""
                }`
              }
            >
              <IoMdAddCircleOutline size={24} />
              <span className={`${isCollapsed && "hidden"}`}>Add Campaign</span>
            </NavLink>
            {/*Manage camps  */}
            <NavLink
              to="/dashboard/manage-camps"
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded hover:bg-teal-600 ${
                  isActive ? "bg-teal-500" : ""
                }`
              }
            >
              <MdManageSearch size={24} />
              <span className={`${isCollapsed && "hidden"}`}>
                {" "}
                Camp Management
              </span>
            </NavLink>
            {/*Manage Registered user  */}
            <NavLink
              to="/dashboard/manage-registered-camps"
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded hover:bg-teal-600 ${
                  isActive ? "bg-teal-500" : ""
                }`
              }
            >
              <FaTasks size={24} />
              <span className={`${isCollapsed && "hidden"}`}>
                Registrations Management
              </span>
            </NavLink>
          </div>
        ) : (
          // {/* User Links */}
          <div>
            {/* Analytics */}
            <NavLink
              to="/dashboard/analytics"
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded hover:bg-teal-600 ${
                  isActive ? "bg-teal-500" : ""
                }`
              }
            >
              <IoAnalyticsSharp size={24} />
              <span className={`${isCollapsed && "hidden"}`}>Analytics</span>
            </NavLink>
            {/* registered camps */}
            <NavLink
              to="/dashboard/registered-camps"
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded hover:bg-teal-600 ${
                  isActive ? "bg-teal-500" : ""
                }`
              }
            >
              <IoMdListBox size={24} />
              <span className={`${isCollapsed && "hidden"}`}>
                Registered Camps
              </span>
            </NavLink>
            {/* Payment History */}
            <NavLink
              to="/dashboard/payment-history"
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded hover:bg-teal-600 ${
                  isActive ? "bg-teal-500" : ""
                }`
              }
            >
              <FaReceipt size={24} />
              <span className={`${isCollapsed && "hidden"}`}>
                Payment History
              </span>
            </NavLink>
          </div>
        )}

        {/* divider */}
        <div className="space-y-5">
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Common links */}
        <div className="">
          {/* profile */}
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded hover:bg-teal-600 ${
                isActive ? "bg-teal-500" : ""
              }`
            }
          >
            <ImProfile size={24} />
            <span className={`${isCollapsed && "hidden"}`}>Profile</span>
          </NavLink>
          {/* home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded hover:bg-teal-600 ${
                isActive ? "bg-teal-500" : ""
              }`
            }
          >
            <AiOutlineHome size={24} />
            <span className={`${isCollapsed && "hidden"}`}>Home</span>
          </NavLink>

          {/* logout */}
          <button
            onClick={onLogout}
            className="flex items-center gap-4 p-2 rounded hover:bg-teal-600"
          >
            <BiLogOut size={24} />
            <span className={`${isCollapsed && "hidden"}`}>Logout</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
