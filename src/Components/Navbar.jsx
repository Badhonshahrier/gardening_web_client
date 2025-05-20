import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, NavLink } from "react-router";
import { GiTreeBranch } from "react-icons/gi";

const Navbar = () => {
  const { user } = use(AuthContext);
  return (
    <div className="bg-gradient-to-r from-lime-100 via-green-100 to-green-200">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 w-52 p-2"
            >
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>Share a Garden Tip</NavLink>
              </li>
              <li>
                <NavLink>Explore Gardeners</NavLink>
              </li>
              <li>
                <NavLink>My Tips</NavLink>
              </li>
            </ul>
          </div>
          <a className="">
            <GiTreeBranch color="green" size={42} />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline font-bold"
                    : "text-black font-medium"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline font-bold"
                    : "text-black font-medium"
                }
              >
                Explore Gardeners
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sharegardentip"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline font-bold"
                    : "text-black font-medium"
                }
              >
                Share a Garden Tip
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browsetippage"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline font-bold"
                    : "text-black font-medium"
                }
              >
                Browse Tips
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/mytips"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline font-bold"
                    : "text-black font-medium"
                }
              >
                My Tips
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-active bg-green-500 rounded-4xl py-3 px-10 text-lg font-bold text-black">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
