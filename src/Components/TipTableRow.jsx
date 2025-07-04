import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { Eye } from "lucide-react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const TipTableRow = () => {
  const { user } = useContext(AuthContext);
  const tablesData = useLoaderData();
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const publicData = tablesData.filter(
    (item) => item.availability === "Public"
  );
  const filteredData =
    selectedDifficulty === "All"
      ? publicData
      : publicData.filter((item) => item.difficulty === selectedDifficulty);

  return (
    <div className="p-4">
      <div className="flex items-center gap-4 mb-6 w-11/12 mx-auto">
        <label className="text-lg font-semibold">Filter by Difficulty:</label>
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="border p-2 rounded focus:ring-2 focus:ring-green-400"
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <table className="w-11/12 mx-auto border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Difficulty</th>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length <= 0 ? (
            <tr>
              <td
                colSpan={7}
                className="text-red-600 font-bold text-xl bg-base-200 h-40 text-center"
              >
                No tips found for selected difficulty
              </td>
            </tr>
          ) : (
            filteredData.map((item) => (
              <tr key={item._id} className="border">
                <td className="p-3 font-bold">{item.title}</td>
                <td className="p-3 font-medium">{item.category}</td>

                <td className="p-3">{item.name}</td>

                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.difficulty}</td>
                <td className="p-3">
                  <img
                    src={item.photo}
                    className="w-14 h-14 object-cover rounded-full"
                  />
                </td>
                <td className="p-3">
                  <Link to={user ? `/details/${item._id}` : "/login"}>
                    <button className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                      <Eye size={18} /> See More
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TipTableRow;
