import React, { useEffect, useState } from "react";

const FeaturedGardeners = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/active-gardeners")
      .then((res) => res.json())
      .then((data) => setGardeners(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {gardeners.map((gardener, index) => (
        <div key={index} className="bg-green-50 p-4 rounded-xl shadow">
          <img
            src={gardener.avatar}
            alt={gardener.name}
            className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
          />
          <h3 className="text-xl font-bold text-center text-green-700">
            {gardener.name}
          </h3>
          <p className="text-sm text-center text-gray-600">
            {gardener.location}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedGardeners;
