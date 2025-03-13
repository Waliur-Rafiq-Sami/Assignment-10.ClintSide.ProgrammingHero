import React from "react";
import img from "../../assets/empty/not-removebg-preview.png";
import { Link } from "react-router-dom";

const NoCardFound = () => {
  return (
    <div className="flex flex-col items-center">
      <img className="my-10 mx-auto bg-[#0c0707a6] rounded-3xl" src={img} />
      <Link to="/addItem">
        <button className="btn btn-info lg:w-[500px] md:w-[300px] font-bold text-lg text-white">
          Add Item
        </button>
      </Link>
    </div>
  );
};

export default NoCardFound;
