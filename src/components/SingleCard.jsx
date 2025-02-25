import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { userInfo } from "../context/Verification";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const SingleCard = ({ data }) => {
  const { user } = useContext(userInfo);
  const { _id, tittle, photo, price, category, adderEmail } = data;
  // console.log(data);
  // console.log(user);
  const handleYourCardBtn = (addData) => {
    const email = user.email;
    const finalData = { email, data: [addData] };

    fetch("http://localhost:5000/addList", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged || data.modifiedCount > 0) {
          toast("Successfully added", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else if (data.found) {
          toast.warn("Sorry! Already Added", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else {
          toast.error("Sorry! Something Wrong", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
        console.log(data);
      });
  };
  return (
    <div className="m-1">
      <div className="card shadow-2xl bg-[#cbd4d63f]">
        <figure>
          <img src={photo} alt="Shoes" />
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
            <Link to={`/update/${_id}`}>
              <button className="btn btn-sm bg-blue-700 border-none hover:bg-blue-600">
                View
              </button>
            </Link>
            {user ? (
              <Link>
                <button
                  className="btn btn-sm bg-yellow-600 border-none hover:bg-yellow-500"
                  onClick={() => handleYourCardBtn(data)}
                >
                  Add
                </button>
              </Link>
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
              <Link to={``}>
                <button className="btn btn-sm bg-green-700 border-none hover:bg-green-600 btn-disabled">
                  Update
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
