import React from "react";
import { useLoaderData } from "react-router";
import { Eye } from "lucide-react";

const TipTableRow = () => {
  const tablesData = useLoaderData();

  const publicData = tablesData.filter(
    (item) => item.availability === "Public"
  );
  console.log(publicData);
  return (
    <div className="p-4">
      <table className="w-11/12 mx-auto border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {publicData.map((item) => (
            <tr key={item._id} className="border">
              <td className="p-3 font-bold">{item.title}</td>
              <td className="p-3 font-medium ">{item.category}</td>
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.email}</td>
              <td className="p-3">
                <img
                  src={item.photo}
                  className="w-15 h-15 object-cover rounded-full"
                />
              </td>
              <td className="p-3">
                <button className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                  <Eye size={18} /> See More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TipTableRow;
