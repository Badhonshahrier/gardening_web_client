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
    <div className=" mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Gardening Tools</h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="card shadow-lg">
            <figure className="px-8 pt-8">
              <img src={tool.image} alt={tool.tool_name} className="rounded-xl w-96 h-96 object-cover" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl">{tool.tool_name}</h2>
              <p className="text-gray-600">{tool.description}</p>
              <p className="text-sm text-green-700 font-medium mt-2">Category: {tool.category}</p>
              <div className="card-actions mt-4">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstrumentSection;

