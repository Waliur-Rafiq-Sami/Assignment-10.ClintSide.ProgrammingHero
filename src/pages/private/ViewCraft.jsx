import React, { useContext, useEffect, useState } from "react";
import { userInfo } from "../../context/Verification";
import Swal from "sweetalert2";
import img from "../../assets/empty/empty-cart.png";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const ViewCraft = () => {
  const [loadedCard, setLoadedCard] = useState([]);
  // const [addCrafts, setAddCrafts] = useState(loadedCard);
  const { user, loading } = useContext(userInfo);
  useEffect(() => {
    if (!loading && user?.email) {
      fetch(`hhttps://test-rose-ten-12.vercel.app/viewList?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setLoadedCard(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [loading, user?.email]);
  const handleDelete = (id) => {
    console.log("de", id);
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`hhttps://test-rose-ten-12.vercel.app/viewItem`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ e: user.email, id }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const afterDelete = loadedCard.filter((i) => i._id != id);
              setLoadedCard(afterDelete);
            } else {
              Swal.fire("Sorry! Something Wrong", "", "error");
            }
          });
      }
    });
  };

  return (
    <div className="">
      {loadedCard.length ? (
        <div className="mx-auto container my-5">
          <div className="grid grid-cols-1 gap-10 ">
            <h2 className="text-3xl text-center font-semibold my-5">
              Your Selected Item
            </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
              {loadedCard.map((d) => (
                <div key={d._id}>
                  <div className="bg-base-100 shadow-xl border-1 border-gray-100 rounded-2xl">
                    <figure>
                      <img
                        className=" h-64 w-full p-3 rounded-2xl"
                        src={d.photo}
                        alt="Photo"
                      />
                    </figure>
                    <div className="flex flex-col justify-between mt-2 px-2 pb-5 text-md">
                      <div className="m-2 border-dashed pr-1">
                        <div className="pt-1 pb-3 mb-5 border-b border-gray-200 border-dashed">
                          <h2 className="font-bold">ID : {d._id}</h2>
                          <h2 className="font-bold">
                            Name :{" "}
                            <span className="font-normal">{d.tittle}</span>
                          </h2>
                          <p>
                            <span className="font-bold">Category : </span>{" "}
                            {d.category}
                          </p>
                          <p className="flex items-center">
                            <span className="font-bold pr-2">Price : </span>
                            {d.price} <FaBangladeshiTakaSign />
                          </p>
                          <p className="flex items-center">
                            <span className="font-bold pr-2">Location : </span>
                            {d.location}
                          </p>
                        </div>
                        <div className="flex justify-between border-b text-sm border-gray-200 border-dashed pb-2">
                          <div>
                            <img
                              className="w-10 rounded-full"
                              src={d.adderPhoto}
                              alt="Adder"
                            />
                            <h2 className="card-title text-sm">
                              {d.adderName}
                            </h2>
                          </div>
                          <div>
                            <h2 className="card-title text-sm">
                              {d.adderEmail}
                            </h2>
                            <p>
                              <span className="font-bold ">
                                Submitted At : <br />{" "}
                              </span>
                              {d.submittedAt}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p
                        onClick={() => handleDelete(d._id)}
                        className="btn btn-accent mx-3 my-2"
                      >
                        Delete
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto h-lvh flex justify-center items-center">
          {<img src={img} alt="" />}
        </div>
      )}
    </div>
  );
};

export default ViewCraft;
