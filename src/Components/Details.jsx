import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { User, BadgeCheck, Calendar, Users, Leaf, Lightbulb } from "lucide-react";

const Details = () => {
  const { id } = useParams();  // URL থেকে id নিলাম
  const [singleData, setSingleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://gardening-assignment-server.vercel.app/gardeners/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Data not found");
        return res.json();
      })
      .then((data) => {
        setSingleData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
  if (!singleData) return <p className="text-center py-10">No Data Found</p>;

  return (
    <div className="bg-green-50 min-h-screen py-10">
      <div className="w-11/12 mx-auto max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <img
          src={singleData.image}
          alt={singleData.name}
          className="w-full h-72 object-cover rounded-xl"
        />

        <div className="mt-5 flex items-center gap-2">
          <User className="text-green-600" size={24} />
          <h1 className="text-3xl font-bold text-green-800">{singleData.name}</h1>
          <BadgeCheck className="text-blue-500" size={20} />
        </div>

        <p className="text-gray-600 mt-4">{singleData.full_description || singleData.short_description}</p>

        <div className="grid grid-cols-2 gap-4 mt-6 text-green-700">
          <p className="flex items-center gap-2"><Calendar /> Age: {singleData.age}</p>
          <p className="flex items-center gap-2"><Users /> Gender: {singleData.gender}</p>
          <p className="flex items-center gap-2">
            <Leaf /> Experience: {Array.isArray(singleData.experiences) ? singleData.experiences.join(", ") : singleData.experiences}
          </p>
          <p className="flex items-center gap-2"><Lightbulb /> Tips Shared: {singleData.total_shared_tips}</p>
        </div>

        <div className="mt-6">
          <span
            className={`px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider ${
              singleData.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
            }`}
          >
            {singleData.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
