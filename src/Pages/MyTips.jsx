import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MyTips = () => {
  const initialData = useLoaderData();
  const [myTips, setMyTips] = useState(initialData);
  const { user } = use(AuthContext);

  const handleDelete = (id) => {
    (id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // stat deleting
        fetch(`https://gardening-assignment-server.vercel.app/sharetips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your tips has been deleted.",
                icon: "success",
              });
              //   remove the tips from the state
              const remainingTips = myTips.filter((tip) => tip._id !== id);
              setMyTips(remainingTips)
            }
          });
      }
    });
  };
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://gardening-assignment-server.vercel.app/my-tips/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTips(data);
        (data);
      });
  }, [user?.email]);

  return (
    <div className="w-11/12 mx-auto mt-12">
      <h2 className="text-4xl font-extrabold mb-8 text-green-800 text-center">
        My Garden Tips
      </h2>

      <div className=" bg-white rounded-xl shadow-lg">
        <table className="w-full ">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="p-4 text-left rounded-tl-xl">Title</th>
              <th className="p-4 text-left">Plant</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Difficulty</th>
              <th className="p-4 text-left">Availability</th>
              <th className="p-4 text-left rounded-tr-xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTips.map((detail) => (
              <tr key={detail._id}>
                <td className="p-4 border-t">{detail.title}</td>
                <td className="p-4 border-t">{detail.plant}</td>
                <td className="p-4 border-t">{detail.category}</td>
                <td className="p-4 border-t">{detail.difficulty}</td>
                <td className="p-4 border-t">{detail.availability}</td>
                <td className="p-4 border-t space-x-2">
                  <Link to={`/updatetips/${detail._id}`}>
                    <button className="text-white bg-green-500 font-medium px-3 py-1 rounded">
                      <FaRegEdit />
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(detail._id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1 rounded"
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {myTips.length === 0 && (
          <p className="text-center p-6 text-gray-600 text-lg">
            No garden tips found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyTips;
