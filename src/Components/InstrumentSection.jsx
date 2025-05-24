import React, { useEffect, useState } from "react";

const InstrumentSection = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("/tools.json")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);

  return (
    <div className="mt-20 bg-gradient-to-br from-green-50 via-green-100 to-green-50 py-16">
      <h2 className="text-5xl font-extrabold text-center mb-6 text-green-800">
         Gardening Tools
      </h2>
      <p className="text-gray-600 text-lg text-center mb-14 max-w-2xl mx-auto">
        "Tools that turn soil and space into thriving green sanctuaries "
      </p>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="relative bg-white/30 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 overflow-hidden group"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={tool.image}
                alt={tool.tool_name}
                className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-green-900 mb-2">
                {tool.tool_name}
              </h3>
              <p className="text-gray-700 text-base mb-3">{tool.description}</p>

              <span className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white text-xs font-bold px-3 py-1 rounded-full mt-3">

                Category : {tool.category}
              </span>

              <div className="mt-6"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstrumentSection;
