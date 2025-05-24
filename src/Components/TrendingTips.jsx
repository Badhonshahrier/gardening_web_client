import React, { useEffect, useState } from "react";
import { Lightbulb } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const TrendingTips = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch("https://gardening-assignment-server.vercel.app/toptrending")
      .then((res) => res.json())
      .then((data) => setTrending(data));
  }, []);

  return (
    <div className="bg-green-50 py-20 min-h-[120vh]">
      <div className="w-11/12 mx-auto">
  
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-800 flex justify-center items-center gap-2">
            <Lightbulb size={32} />
            <Typewriter
              words={[
                "Trending Garden Inspirations",
                "Fresh Green Ideas",
                "Community’s Top Gardening Tips",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 font-medium">
            Dive into a collection of standout tips — handpicked from our
            community’s best. Discover fresh ideas for your green space!
          </p>
        </div>

     
        <Fade cascade damping={0.1} triggerOnce>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trending.map((trend) => (
              <div
                key={trend._id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300 flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={trend.photo}
                    alt={trend.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    {trend.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-1">
                    {trend.description.slice(0, 100)}...
                  </p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      {trend.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        trend.difficulty === "Easy"
                          ? "bg-emerald-100 text-emerald-800"
                          : trend.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {trend.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default TrendingTips;
