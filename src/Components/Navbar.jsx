import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router";
import { GiTreeBranch } from "react-icons/gi";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logout",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-gradient-to-r from-green-200 via-green-100 to-lime-100 sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto sticky">
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
          {user ? (
            <>
            <li className="mr-6"><NavLink to='/dashboard'>Dashboard</NavLink></li>
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
            </div></>
            
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





