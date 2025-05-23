import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, NavLink } from "react-router";
import { GiTreeBranch } from "react-icons/gi";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const handleLogout = () => {
    userLogOut()
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logout",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 p-2"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/sharegardentip">Share a Garden Tip</NavLink>
              </li>
              <li>
                <NavLink to="/explore-gardeners">Explore Gardeners</NavLink>
              </li>
              <li>
                <NavLink to="/mytips">My Tips</NavLink>
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
                to="/explore-gardeners"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline font-bold"
                    : "text-black font-medium"
                }
              >
                Explore Gardeners
              </NavLink>
            </li>
            {user ? (
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
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive && user
                      ? "text-blue-600 underline font-bold"
                      : "text-black font-medium"
                  }
                >
                  Share a Garden Tip
                </NavLink>
              </li>
            )}
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

            {user ? (
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
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive && user
                      ? "text-blue-600 underline font-bold"
                      : "text-black font-medium"
                  }
                >
                  My Tips
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-circle avatar tooltip tooltip-bottom"
                data-tip={user.displayName || user.email}
              >
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* <label className="flex cursor-pointer gap-2 items-center ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                  type="checkbox"
                  className="toggle theme-controller"
                  aria-label="Toggle dark mode"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label> */}

              <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-36">
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 font-bold text-lg hover:bg-red-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn p-0 px-7 rounded-2xl text-xl font-bold bg-amber-400 hover:bg-green-500">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
