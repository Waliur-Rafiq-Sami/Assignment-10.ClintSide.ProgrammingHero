import React, { useContext, useEffect, useState } from "react";
import { userInfo } from "../../context/Verification";
import Swal from "sweetalert2";

const ViewCraft = () => {
  const [loadedCard, setLoadedCard] = useState([]);
  // const [addCrafts, setAddCrafts] = useState(loadedCard);
  const { user, loading } = useContext(userInfo);
  useEffect(() => {
    if (!loading && user?.email) {
      fetch(`http://localhost:5000/viewList?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setLoadedCard(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [loading, user?.email]);
  const handleDelete = (id) => {
    console.log("de", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/viewItem`, {
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

  // console.log(loadedCard);
  return (
    <div>
      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-10 ">
          {loadedCard.map((d) => (
            <div key={d._id}>
              <div className="card bg-base-100 w-96 shadow-xl border-2 ">
                <figure>
                  <img src={d.photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {d._id}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p
                    onClick={() => handleDelete(d._id)}
                    className="btn btn-accent"
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
  );
};

export default ViewCraft;
