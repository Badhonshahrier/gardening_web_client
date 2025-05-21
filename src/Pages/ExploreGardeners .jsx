import React, { useEffect, useState } from "react";
import {
  BadgeCheck,
  Leaf,
  User,
  Calendar,
  Lightbulb,
  Users,
} from "lucide-react";

const ExploreGardeners = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/gardeners")
      .then((res) => res.json())
      .then((data) => {
        setGardeners(data);
      });
  }, []);

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-green-700 text-center">
        🌿 Explore Gardeners 🌿
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {gardeners.map((gardener) => (
          <div
            key={gardener.id}
            className="bg-white rounded-2xl shadow-lg o hover:shadow-2xl "
          >
            <img
              src={gardener.image}
              alt=""
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <User className="text-green-600" size={20} />
                <h2 className="text-xl font-bold text-green-800">
                  {gardener.name}
                </h2>
                <BadgeCheck className="text-blue-500" size={18} />
                <p>{gardener.status}</p>
              </div>

              <p className="text-gray-600 flex items-center gap-1 mb-1">
                <Calendar size={16} /> Age : {gardener.age}
              </p>

              <p className="text-gray-600 flex items-center gap-1 mb-1">
                <Users size={16} /> Gender : {gardener.gender}
              </p>

              <p className="text-gray-600 flex items-center gap-1 mb-1">
                <Leaf size={16} /> Experiences : {gardener.experiences}
              </p>

              <p className="text-gray-600 flex items-center gap-1 mb-1">
                <Lightbulb size={16} /> Total Tips: {gardener.totalTips}
              </p>

              <div className="mt-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    gardener.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {gardener.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;
