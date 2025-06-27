import React from "react";
import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">

      <nav className="w-64 bg-green-100 p-6">
        <h2 className="text-xl font-bold mb-6 text-green-800">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="overview"
              className={({ isActive }) =>
                isActive ? "font-bold text-green-700" : "text-green-900"
              }
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore-gardeners"
              className={({ isActive }) =>
                isActive ? "font-bold text-green-700" : "text-green-900"
              }
            >
              All Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sharegardentip"
              className={({ isActive }) =>
                isActive ? "font-bold text-green-700" : "text-green-900"
              }
            >
              Add Item
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mytips"
              className={({ isActive }) =>
                isActive ? "font-bold text-green-700" : "text-green-900"
              }
            >
              My Items
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Content Area */}
      <main className="flex-grow p-8 bg-green-50">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
