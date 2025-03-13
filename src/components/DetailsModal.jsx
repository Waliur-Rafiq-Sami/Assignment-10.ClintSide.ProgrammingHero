import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const DetailsModal = ({ data, onClose }) => {
  const {
    _id,
    tittle,
    photo,
    price,
    category,
    adderEmail,
    adderName,
    adderPhoto,
    description,
    location,
    submittedAt,
  } = data || {};

  return (
    <div className="modal modal-open">
      <div className="modal-box bg-[#94949456]">
        <form method="dialog">
          <button
            className="z-50 btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500 bg-red-300 hover:bg-red-100 border-0 hover:scale-105 transition-transform"
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        <div className="card shadow-2xl bg-[#63635bb9]">
          <figure>
            <img className="w-full" src={photo} alt="Photo" />
          </figure>
          <div className="flex flex-col justify-between mt-2 px-2 pb-5">
            <div className="m-2 border-dashed pr-1">
              <div className="flex justify-between border-b border-gray-200 border-dashed pb-2">
                <div>
                  <img
                    className="w-15 rounded-full"
                    src={adderPhoto}
                    alt="Adder"
                  />
                  <h2 className="card-title">{adderName}</h2>
                </div>
                <div>
                  <h2 className="card-title">{adderEmail}</h2>
                  <p>
                    <span className="font-bold">
                      Submitted At : <br />{" "}
                    </span>
                    {submittedAt}
                  </p>
                </div>
              </div>
              <div className="pt-3">
                <h2 className="card-title">ID : {_id}</h2>
                <h2 className="card-title">Name : {tittle}</h2>
                <p>
                  <span className="font-bold">Category : </span> {category}
                </p>
                <p className="flex items-center">
                  <span className="font-bold pr-2">Price : </span>
                  {price} <FaBangladeshiTakaSign />
                </p>
                <p className="flex items-center">
                  <span className="font-bold pr-2">Location : </span>
                  {location}
                </p>
                <p>
                  <span className="font-bold pr-2 underline">Description</span>
                </p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop" onClick={onClose}></form>
    </div>
  );
};

export default DetailsModal;
