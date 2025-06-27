import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [allTips, setAllTips] = useState([]);
  const [myTips, setMyTips] = useState([]);


  useEffect(() => {
    fetch("https://gardening-assignment-server.vercel.app/sharetips")
      .then((res) => res.json())
      .then((data) => {
        setAllTips(data);

        const userItems = data.filter((tip) => tip.email === user?.email);
        setMyTips(userItems);
      });
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-green-800">Overview</h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-semibold text-gray-600">Total Garden Tips</h2>
          <p className="text-2xl font-bold">{allTips.length}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-semibold text-gray-600">My Shared Tips</h2>
          <p className="text-2xl font-bold">{myTips.length}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-semibold text-gray-600">Logged-in User</h2>
          <p>Name: {user?.displayName}</p>
          <p>Email: {user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
