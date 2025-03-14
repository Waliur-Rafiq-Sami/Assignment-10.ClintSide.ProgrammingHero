import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { userInfo } from "../context/Verification";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import DetailsModal from "./DetailsModal";

const SingleCard = ({ data }) => {
  const { user } = useContext(userInfo);
  const [selectedData, setSelectedData] = useState(null);

  const { _id, tittle, photo, price, category } = data;

  const handleViewClick = () => {
    setSelectedData(data);
  };

  return (
    <div className="m-1">
      <div className="card shadow-2xl bg-[#858323b9] h-96">
        <figure>
          <img className="h-48 w-full" src={photo} alt="Shoes" />
        </figure>
        <div className="flex flex-col justify-between mt-2 ">
          <div className="m-2 border-dashed pr-1">
            <h2 className="card-title">Name : {tittle}</h2>
            <p>
              <span className="font-bold">Category : </span> {category}
            </p>
            <p className="flex items-center">
              <span className="font-bold pr-2">Price : </span>
              {price} <FaBangladeshiTakaSign />
            </p>
          </div>
          <div className="flex flex-row-reverse justify-end ml-2 gap-2 py-5 mr-2 border-t border-dashed pt-3">
            <button
              onClick={handleViewClick} // Show details when clicked
              className="btn btn-sm bg-blue-700 border-none hover:bg-blue-600"
            >
              View
            </button>
            {user ? (
              <button className="btn btn-sm bg-yellow-600 border-none hover:bg-yellow-500">
                Add
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="btn btn-sm bg-yellow-600 border-none hover:bg-yellow-500">
                  Add
                </button>
              </Link>
            )}
            {user?.email === data?.adderEmail ? (
              <Link to={`/update/${_id}`}>
                <button className="btn btn-sm bg-green-700 border-none hover:bg-green-600">
                  Update
                </button>
              </Link>
            ) : (
              <button className="btn btn-sm bg-green-700 border-none hover:bg-green-600 btn-disabled">
                Update
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {selectedData && (
        <DetailsModal
          data={selectedData}
          onClose={() => setSelectedData(null)}
        />
      )}
    </div>
  );
};

export default SingleCard;
