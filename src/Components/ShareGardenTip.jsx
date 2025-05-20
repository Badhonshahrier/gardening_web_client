import React from "react";
import Swal from "sweetalert2";

const ShareGardenTip = () => {
  const handleShareTips = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const shareTips = Object.fromEntries(formData.entries());
    console.log(shareTips);
    // send tips data to the db
    fetch("http://localhost:3000/sharetips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(shareTips),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully added data on Database",
            showConfirmButton: false,
            timer: 1000,
        
          });
        }
      });
   
  };

  return (
    <div className="w-11/12 mx-auto max-w-3xl p-6 bg-green-50 rounded-xl shadow mt-8">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
        {" "}
        Share a Garden Tip
      </h2>

      <form onSubmit={handleShareTips} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g., How I Grow Tomatoes Indoors"
            required
            className="w-full border p-3 rounded  focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Plant Type / Topic */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Plant Type / Topic
          </label>
          <input
            type="text"
            name="plant"
            required
            placeholder="e.g., Tomato"
            className="w-full border p-3 rounded  focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Difficulty Level */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Difficulty Level
          </label>
          <select
            name="difficulty"
            required
            className="w-full border p-3 rounded  focus:ring-2 focus:ring-green-400"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            rows="4"
            name="description"
            required
            placeholder="Write your tips in details..."
            className="w-full border p-3 rounded  focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        {/* Images URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="photo"
            required
            placeholder="https://example.com/image.jpg"
            className="w-full border p-3 rounded  focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            required
            className="w-full border p-3 rounded  focus:ring-2 focus:ring-green-400"
          >
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Vertical Gardening</option>
            <option>Container Gardening</option>
            <option>Others</option>
          </select>
        </div>

        {/* Availability */}
        <div>
          <label className="block text-sm font-medium mb-1">Availability</label>
          <select
            name="availability"
            required
            className="w-full border p-3 rounded  focus:ring-2 focus:ring-green-400"
          >
            <option>Public</option>
            <option>Hidden</option>
          </select>
        </div>

        {/* User Email & Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              required
              name="name"
              //   value={user.name}
              //   readOnly
              className="w-full border p-3 rounded bg-gray-100 text-gray-600"
            />
          </div>
          <div>
            <label className=" text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              required
              name="email"
              //   value={user.email}
              //   readOnly
              className="w-full border p-3 rounded bg-gray-100 text-gray-600"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-400 hover:bg-green-700 cursor-pointer  text-white font-bold py-3 rounded"
        >
          Share Tip
        </button>
      </form>
    </div>
  );
};

export default ShareGardenTip;
