import React, { use } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, goggleAuth } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully SignUp",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSingUp = () => {
    goggleAuth()
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Google SignUp",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-white w-full max-w-sm mx-auto py-8 px-6 mt-20 shadow-2xl rounded-2xl">
      <h1 className="text-center text-4xl font-extrabold italic text-gray-800 ">
        Register Now!
      </h1>
      <div className="card-body space-y-4">
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-lg font-semibold mb-1 text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
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
              name="photo"
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
              name="email"
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
              name="password"
              className="input input-bordered w-full py-3 px-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Create a password"
            />
          </div>
          <Link to="/login">
            <p className="text-md font-bold text-center">
              Already have an account?{" "}
              <span className="text-indigo-500 underline hover:text-red-500 cursor-pointer">
                Login here
              </span>{" "}
            </p>
          </Link>
          <button
            type="submit"
            className="btn btn-neutral w-full mt-6 font-bold py-3 text-lg"
          >
            Register
          </button>
          <div>
            <label className="block text-lg font-semibold mb-1 text-gray-700 text-center">
              SignUp With Google
            </label>
           <div className="flex justify-center">
             <button
              onClick={handleSingUp}
              className="btn hover:bg-[#34A853]"
            >
              <FcGoogle /> Google
            </button>
           </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
