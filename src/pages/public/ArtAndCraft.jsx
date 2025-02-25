import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import bg_img from "../../assets/ArtAndCraft/christmas_2012_new_1763.jpg";
import { Bounce, ToastContainer } from "react-toastify";
import SingleCard from "../../components/SingleCard";

const ArtAndCraft = () => {
  const LoadedData = useLoaderData();
  const [data, setData] = useState(LoadedData);
  // console.log(data);

  const navLinks = [
    { to: "/artAndCraft", label: "Home" },
    { to: "/artAndCraft", label: "Home" },
    { to: "/artAndCraft", label: "Home" },
    { to: "/artAndCraft", label: "Home" },
    { to: "/artAndCraft", label: "Home" },
  ];

  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg_img}) ` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className=" container mx-auto ">
        {/* // Link section  */}
        <div className="text-end">
          <ul className="menu menu-horizontal py-0 gap-5 my-2">
            {/* //LInk  */}
            {navLinks.map((link, index) => (
              <nav key={index} className="rounded-xl text-white">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `shadow-2xl relative text-sm font-semibold transition duration-300 hover:text-yellow-400 group ${
                      isActive ? "text-yellow-400" : "hover:text-yellow-400"
                    }`
                  }
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </nav>
            ))}
          </ul>
        </div>
        {/* // our  */}
        <div>
          <h2 className="text-center">Card Making</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {data.map((d) => (
              <SingleCard data={d} key={d._id}></SingleCard>
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
