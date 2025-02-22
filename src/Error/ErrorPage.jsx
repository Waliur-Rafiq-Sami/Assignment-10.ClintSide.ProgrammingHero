import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import imt from "../assets/Error/404.gif";

const ErrorPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Background GIF */}
      <img
        src={imt}
        alt="404 Not Found"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Foreground Content */}
      <div className="relative flex flex-col items-center text-center">
        <FaExclamationTriangle className="text-red-500 text-6xl animate-bounce" />
        <h1 className="text-5xl text-gray-800  font-bold mt-4">Oops!</h1>
        <p className="text-lg text-gray-800 mt-2 px-6 font-bold">
          Something went wrong. <br /> The page you are looking for does not
          exist.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
