import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-teal-700 text-white sticky top-0 z-50 shadow-md">
      {/* nav container */}
      <nav className="max-w-7xl mx-auto p-2 flex justify-between items-center">
        {/* logo + name */}
        <div className="flex flex-row items-center gap-2">
          {/* logo */}
          <Link to="/">
            <img
              src={logo}
              alt="campFlow logo"
              className="h-14 w-16 object-cover"
            />
          </Link>
          {/* name */}
          <Link to="/">
            <h2 className="text-4xl font-bold">CampFlow</h2>
          </Link>
        </div>

        {/* large screen links */}
        <div className="hidden md:flex items-center gap-7">
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
          {/* available cars */}
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

        {/* redirects to login page */}
        <div className="flex items-center">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-lg px-3 py-2 rounded ${
                isActive ? "bg-white text-teal-700 font-semibold" : ""
              } hover:bg-white hover:text-teal-700 transition`
            }
          >
            Join Us
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
