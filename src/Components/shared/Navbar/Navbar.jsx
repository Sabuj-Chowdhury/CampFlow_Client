import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import useAuth from "../../../hooks/useAuth";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onLogout = async () => {
    await logOut();
    navigate("/");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <div className="bg-teal-700 text-white sticky top-0 z-50 shadow-md">
      {/* nav container */}
      <nav className="max-w-7xl mx-auto p-2 flex justify-between items-center">
        {/* logo + name */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src={logo}
              alt="campFlow logo"
              className="h-14 w-16 object-cover"
            />
          </Link>
          <Link to="/">
            <h2 className="text-4xl font-bold">CampFlow</h2>
          </Link>
        </div>

        {/* large screen links (centered) */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-7">
          {/* home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg px-3 py-2 rounded ${
                isActive ? "bg-white text-teal-700 font-semibold" : ""
              } hover:bg-white hover:text-teal-700 transition`
            }
          >
            Home
          </NavLink>
          {/* available camp */}
          <NavLink
            to="/available-camps"
            className={({ isActive }) =>
              `text-lg px-3 py-2 rounded ${
                isActive ? "bg-white text-teal-700 font-semibold" : ""
              } hover:bg-white hover:text-teal-700 transition`
            }
          >
            Available Camps
          </NavLink>
        </div>

        {/* auth  */}
        <div className="hidden md:flex items-center gap-2">
          {/* if user logged in */}
          {user ? (
            <div className="relative flex items-center">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={toggleDropdown}
              >
                {/* user name */}
                <span className="text-sm">Hello, {user?.displayName}</span>
                {/* user image */}
                <img
                  src={user?.photoURL}
                  alt="user"
                  className="h-10 w-10 rounded-full object-cover border-2 border-white"
                  referrerPolicy="no-referrer"
                />
                {/* Dropdown arrow */}
                <span className="text-white">▼</span>
              </div>
              {/* dropdown menu open */}
              {dropdownOpen && (
                <div
                  className="  absolute top-16 -mt-3 -right-3
                 bg-white text-teal-700 rounded shadow-lg w-40"
                >
                  {/* dashboard */}
                  <NavLink
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-teal-100"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Dashboard
                  </NavLink>
                  {/* logout */}
                  <button
                    onClick={() => {
                      onLogout();
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // join us(log in)
            <NavLink
              to="/login"
              className="text-lg px-3 py-2 rounded hover:bg-white hover:text-teal-700 transition"
            >
              Join Us
            </NavLink>
          )}
        </div>

        {/* small screen menu */}
        <div className="md:hidden flex items-center gap-2">
          {user && (
            <div className="relative flex items-center">
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={toggleDropdown}
              >
                {/* user image */}
                <img
                  src={user?.photoURL}
                  alt="user"
                  className="h-10 w-10 rounded-full object-cover border-2 border-white"
                  referrerPolicy="no-referrer"
                />
                {/* Dropdown arrow */}
                <span className="text-white">▼</span>
              </div>
              {dropdownOpen && (
                <div
                  className="  absolute top-16 -mt-3 -right-10
                 bg-white text-teal-700 rounded shadow-lg w-40"
                >
                  {/* dashboard */}
                  <NavLink
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-teal-100"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Dashboard
                  </NavLink>
                  {/* logout */}
                  <button
                    onClick={() => {
                      onLogout();
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-teal-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* icons for open and close */}
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? (
              <AiOutlineClose size={24} className="cursor-pointer" />
            ) : (
              <AiOutlineMenu size={24} className="cursor-pointer" />
            )}
          </button>
        </div>
      </nav>

      {/* small screen dropdown menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full min-h-screen bg-opacity-95 bg-teal-700 text-white flex flex-col items-center gap-2 py-4">
          {user && (
            <span className="text-sm text-black">
              Hello, {user.displayName}
            </span>
          )}
          {/* home */}
          <NavLink
            to="/"
            className="text-lg py-2 hover:bg-teal-600 w-full text-center"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          {/* available camp */}
          <NavLink
            to="/available-camps"
            className="text-lg py-2 hover:bg-teal-600 w-full text-center"
            onClick={toggleMenu}
          >
            Available Camps
          </NavLink>
          {!user && (
            <NavLink
              to="/login"
              className="text-lg py-2 hover:bg-teal-600 w-full text-center"
              onClick={toggleMenu}
            >
              Join Us
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
