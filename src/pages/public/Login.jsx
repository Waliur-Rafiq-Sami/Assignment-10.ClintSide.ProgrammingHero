import React from "react";
import img2 from "../../assets/registration/img2.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();
  const handleLoginBtn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="md:grid md:grid-cols-2 h-screen items-center justify-center max-w-4xl mx-auto flex flex-col-reverse">
      {/* Form Section */}
      <div className="flex justify-center">
        <form className="max-w-md w-full">
          <p
            onClick={() => navigation("/")}
            className="md:inline-flex items-center gap-2 btn mb-10 hidden"
          >
            <FaArrowLeft />
            <span>Return Home</span>
          </p>
          <h1 className="text-xl md:text-3xl mb-10 font-semibold md:mt-0 mt-10">
            Login Please
          </h1>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Submit
          </button>
          <p className=" mt-5">
            New to this website please{",  "}
            <span
              className="text-green-500 font-bold hover:cursor-pointer"
              onClick={() => navigation("/register")}
            >
              {" "}
              Registration
            </span>
          </p>
        </form>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <div>
          <p
            onClick={() => navigation("/")}
            className="inline-flex items-center gap-2 btn -mt-20 mb-10 md:hidden"
          >
            <FaArrowLeft />
            <span>Return Home</span>
          </p>
          <img
            className="max-w-xs md:max-w-sm lg:max-w-md"
            src={img2}
            alt="Login Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
