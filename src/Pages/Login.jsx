import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser, goggleAuth } = use(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    ({ email, password });
    logInUser(email, password)
      .then((result) => {
        result;
        Swal.fire({
  position: "center",
  icon: "success",
  title: "Successfully Login",
  showConfirmButton: false,
  timer: 1500
});
        navigate('/')
      })
      .catch((error) => {
        error;
      });
  };

  const handleGoggleLogin = () => {
    goggleAuth()
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Google Login",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-green-50 w-full max-w-sm mx-auto py-8 px-6 mt-20 shadow-xl rounded-2xl">
      <h1 className="text-center text-4xl font-extrabold italic text-gray-800 ">
        Login Now!
      </h1>
      <div className="card-body space-y-4">
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-lg font-semibold mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full py-3 px-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-md font-semibold text-gray-700">
              Don’t have an account?
              <Link to="/register">
                <span className="text-blue-600 hover:text-red-800 underline ml-1 cursor-pointer">
                  Register/Signup
                </span>{" "}
                here
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="btn btn-neutral w-full font-bold py-3 text-lg"
          >
            Login
          </button>

          <div className="text-center">
            <p className="text-gray-600 font-medium mb-3">Or sign in with</p>
            <button
              type="button"
              onClick={handleGoggleLogin}
              className="btn flex items-center justify-center gap-2 mx-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg"
            >
              <FcGoogle size={22} />
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
