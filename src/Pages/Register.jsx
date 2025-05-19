import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="card bg-white w-full max-w-sm mx-auto py-8 px-6 mt-20 shadow-2xl rounded-2xl">
      <h1 className="text-center text-4xl font-extrabold italic text-gray-800 mb-8">
        Register Now!
      </h1>
      <div className="card-body space-y-4">
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-semibold mb-1 text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="input input-bordered w-full py-3 px-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-1 text-gray-700">
              Photo URL
            </label>
            <input
              type="url"
              className="input input-bordered w-full py-3 px-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Photo URL"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="input input-bordered w-full py-3 px-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full py-3 px-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Create a password"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-1 text-gray-700 text-center">
              SignUp With Google
            </label>
            <button className="btn flex items-center"><FcGoogle /> Google</button>
          </div>
         <Link to="/login">
          <p className="text-md">Already have an account? <span className="text-indigo-500 underline hover:text-red-500 cursor-pointer">Login here</span> </p>
         </Link>

          <button
            type="submit"
            className="btn btn-neutral w-full mt-6 font-bold py-3 text-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

