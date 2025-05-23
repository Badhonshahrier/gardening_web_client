import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, NavLink } from "react-router";
import { GiTreeBranch } from "react-icons/gi";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userLogOut } = use(AuthContext);
  const handleLogout = () => {
    userLogOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
  position: "center",
  icon: "success",
  title: "Successfully Logout",
  showConfirmButton: false,
  timer: 1000
});
      })
      .catch((error) => {
        console.log(error);
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
                data-tip={user.displayName ? user.displayName : user.email}
              >
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="object-cover"
                  />
                </div>
              </div>

              <ul
           
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-36"
              >
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
