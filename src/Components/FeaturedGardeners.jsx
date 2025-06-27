import React, { useEffect, useState } from "react";
import {
  BadgeCheck,
  Leaf,
  User,
  Calendar,
  Lightbulb,
  Users,
} from "lucide-react";
import { Link } from "react-router";

const FeaturedGardeners = () => {
  const [activeGardeners, setActiveGardeners] = useState([]);

  useEffect(() => {
    fetch("https://gardening-assignment-server.vercel.app/gardeners/active")
      .then((res) => res.json())
      .then((data) => setActiveGardeners(data));
  }, []);

  return (
    <div className="bg-green-50 py-20 mt-10">
      <div className="px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-green-800 text-center">
          Featured Gardeners
        </h1>
        <p className="text-gray-600 font-medium text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Meet our most passionate and experienced gardeners. Discover how they nurture rare plants, share expert tips, and turn simple spaces into lush, vibrant green havens.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activeGardeners.map((gardener) => (
            
            <div
  key={gardener.id}
  className="bg-white rounded-3xl overflow-hidden border border-green-100 shadow-lg hover:shadow-2xl transition duration-300 group flex flex-col h-full"
>
  <div className="overflow-hidden">
    <img
      src={gardener.image}
      alt={gardener.name}
      className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  <div className="p-5 flex flex-col flex-grow">
    <div className="flex items-center gap-2 mb-2">
      <User className="text-green-600" size={20} />
      <h2 className="text-lg font-bold text-green-800">{gardener.name}</h2>
      <BadgeCheck className="text-blue-500" size={18} />
    </div>

    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
      {gardener.short_description}
    </p>

    <div className="mt-auto flex justify-between items-center pt-4">
      <span
        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
          gardener.status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        {gardener.status}
      </span>

      <Link
        to={`/exploredetails/${gardener._id}`}
        className="text-green-600 text-sm font-semibold hover:underline"
      >
        See More
      </Link>
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
