import React, { useContext, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import bg_img from "../../assets/ArtAndCraft/christmas_2012_new_1763.jpg";
import { userInfo } from "../../context/Verification";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ArtAndCraft = () => {
  const { user } = useContext(userInfo);
  const LoadedData = useLoaderData();
  const [data, setData] = useState(LoadedData);
  console.log(data);

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
    <div
      className="bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <div className=" container mx-auto ">
        <div className="text-end">
          <ul className="menu menu-horizontal py-0 gap-5 my-2">
            <nav className="rounded-xl">
              <nav className="text-white">
                <NavLink
                  to="/artAndCraft"
                  className={({ isActive }) =>
                    `shadow-2xl relative text-sm font-semibold transition duration-300 hover:text-yellow-400 group  ${
                      isActive ? "text-yellow-400" : "hover:text-yellow-400"
                    }`
                  }
                >
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </nav>
            </nav>
            <nav className="rounded-xl">
              <nav className="text-white">
                <NavLink
                  to="/artAndCraft"
                  className={({ isActive }) =>
                    `shadow-2xl relative text-sm font-semibold transition duration-300 hover:text-yellow-400 group  ${
                      isActive ? "text-yellow-400" : "hover:text-yellow-400"
                    }`
                  }
                >
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </nav>
            </nav>
            <nav className="rounded-xl">
              <nav className="text-white">
                <NavLink
                  to="/artAndCraft"
                  className={({ isActive }) =>
                    `shadow-2xl relative text-sm font-semibold transition duration-300 hover:text-yellow-400 group  ${
                      isActive ? "text-yellow-400" : "hover:text-yellow-400"
                    }`
                  }
                >
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </nav>
            </nav>
            <nav className="rounded-xl">
              <nav className="text-white">
                <NavLink
                  to="/artAndCraft"
                  className={({ isActive }) =>
                    `shadow-2xl relative text-sm font-semibold transition duration-300 hover:text-yellow-400 group  ${
                      isActive ? "text-yellow-400" : "hover:text-yellow-400"
                    }`
                  }
                >
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </nav>
            </nav>
            <nav className="rounded-xl">
              <nav className="text-white">
                <NavLink
                  to="/artAndCraft"
                  className={({ isActive }) =>
                    `shadow-2xl relative text-sm font-semibold transition duration-300 hover:text-yellow-400 group  ${
                      isActive ? "text-yellow-400" : "hover:text-yellow-400"
                    }`
                  }
                >
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </nav>
            </nav>
          </ul>
        </div>

        {/* // our  */}

        <div>
          <h2 className="text-center">Card Making</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {data.map((d) => (
              <div key={d._id}>
                <div className="card bg-base-100 shadow-xl m-3">
                  <figure>
                    <img src={d.photo} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Shoes!
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Fashion</div>
                      <div className="badge badge-outline">Products</div>
                    </div>
                  </div>
                  <Link to={`/update/${d._id}`}>
                    <button>update</button>
                  </Link>
                  <button onClick={() => handleYourCardBtn(d)}>
                    Add your card
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default ArtAndCraft;
