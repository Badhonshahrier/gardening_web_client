import React from "react";
import { useParams } from "react-router";
import { GiTreeBranch } from "react-icons/gi";
import { BiSolidLike } from "react-icons/bi";
const TipCard = ({ detailsData }) => {
  const { id } = useParams();
  
  const data = detailsData.find((item) => item._id === id);

  return (
    <div className="p-6 bg-green-50 ">
    <div className="flex justify-center">
        <GiTreeBranch color="green" size={42} />
          <h1 className="text-4xl pl-5 font-extrabold text-green-800 mb-6 ">
         Tip Details
      </h1>
      
    </div>

      {data ? (
        <div className="max-w-2xl mx-auto bg-white border border-green-200 rounded-2xl shadow-lg overflow-hidden">
          <img
            src={data.photo}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold text-green-900 mb-3">
              {data.title}
            </h2>
            <p className="text-sm text-green-700 mb-1">
              <span className="font-semibold">Category:</span> {data.category}
            </p>
            <p className="text-sm text-green-700 mb-1">
              <span className="font-semibold">Plant:</span> {data.plant}
            </p>
            <p className="text-sm text-green-700 mb-1">
              <span className="font-semibold">Difficulty:</span> {data.difficulty}
            </p>
            <p className="text-sm text-green-700 mb-4">
              <span className="font-semibold">Availability:</span> {data.availability}
            </p>

            <p className="text-gray-800 leading-relaxed mb-4">{data.description}</p>

            <div className="border-t pt-4 text-sm text-gray-600 flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg">Shared by:</p>
                <p>Name : {data.name}</p>
                <p>Email : {data.email}</p>
              </div>
              <div className="flex items-center cursor-pointer ">
                <BiSolidLike size={30} color="blue" />
                <button className="text-xl pl-2 font-bold">Like</button>
                
              </div>
             
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center">No tip found for this ID.</p>
      )}
    </div>
  );
};

export default TipCard;

