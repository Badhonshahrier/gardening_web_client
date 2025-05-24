import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const ShareGardenTip = () => {
  const { user } = useContext(AuthContext);

  const handleShareTips = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const shareTips = Object.fromEntries(formData.entries());

    fetch("https://gardening-assignment-server.vercel.app/sharetips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(shareTips),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Tip Shared Successfully!",
            showConfirmButton: false,
            timer: 1200,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-50 py-20">
      <div className="w-11/12 mx-auto max-w-3xl bg-base-200  border border-white/20 p-8 rounded-3xl shadow">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-4">
            Share a Garden Tip
          </h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            Got a great tip for fellow plant lovers? Share your green wisdom and
            inspire others to grow beautiful, thriving gardens!
          </p>
        </div>

        <form onSubmit={handleShareTips} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Tip Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g., How I Grow Tomatoes Indoors"
              required
              className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Plant Type / Topic
            </label>
            <input
              type="text"
              name="plant"
              required
              placeholder="e.g., Tomato"
              className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Difficulty Level
            </label>
            <select
              name="difficulty"
              required
              className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              rows="4"
              name="description"
              required
              placeholder="Write your tips in detail..."
              className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="photo"
              required
              placeholder="https://example.com/image.jpg"
              className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              required
              className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400"
            >
              <option>Composting</option>
              <option>Plant Care</option>
              <option>Vertical Gardening</option>
              <option>Container Gardening</option>
              <option>Others</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Availability
            </label>
            <select
              name="availability"
              required
              className="w-full border p-3 rounded focus:ring-2 focus:ring-green-400"
            >
              <option>Public</option>
              <option>Hidden</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                required
                name="name"
                value={user.displayName}
                readOnly
                className="w-full border p-3 rounded bg-gray-100 text-gray-600"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1">Your Email</label>
              <input
                type="email"
                required
                name="email"
                value={user.email}
                readOnly
                className="w-full border p-3 rounded bg-gray-100 text-gray-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 rounded  hover:scale-105"
          >
            Share Tip
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShareGardenTip;
