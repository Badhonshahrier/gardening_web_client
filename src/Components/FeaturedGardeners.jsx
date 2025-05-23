import React, { useEffect, useState } from "react";
import {
  BadgeCheck,
  Leaf,
  User,
  Calendar,
  Lightbulb,
  Users,
} from "lucide-react";

const FeaturedGardeners = () => {
  const [activeGardeners, setActiveGardeners] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/gardeners/active")
      .then((res) => res.json())
      .then((data) => setActiveGardeners(data));
  }, []);
  console.log(activeGardeners);

  return (
    <div className="bg-green-50 mt-20">
      <div className="p-6  w-11/12 mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-green-700 text-center">
          Featured Gardeners
        </h1>
        <p className="text-gray-600 font-bold text-center ml-6 lg:w-3/4 lg:ml-40 mb-8">
          "Meet our most passionate and experienced gardeners from this vibrant community. Discover how they nurture rare plants, share expert tips, and turn simple spaces into green havens. Get inspired by their personal gardening journeys, creative ideas, and the beautiful ways they connect with nature every day."
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {activeGardeners.map((gardener) => (
            <div key={gardener.id} className="bg-white rounded-2xl shadow-lg ">
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
    </div>
  );
};

export default FeaturedGardeners;
