import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import bg_img from "../../assets/ArtAndCraft/christmas_2012_new_1763.jpg";
import { Bounce, ToastContainer } from "react-toastify";

const ArtAndCraft = () => {
  const navLinks = [
    { to: "/artAndCraft/all", label: "All" },
    { to: "/artAndCraft/cardMaking", label: "Card Making" },
    { to: "/artAndCraft/scrapbooking", label: "Scrapbooking" },
    {
      to: "/artAndCraft/paperQuillingOrigami",
      label: "Paper Quilling & origami",
    },
    { to: "/artAndCraft/glassPainting", label: "Glass Painting" },
    { to: "/artAndCraft/lampworking", label: "Lampworking" },
    { to: "/artAndCraft/glassDyingStaining", label: "Glass Dying & Staining" },
  ];

  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg_img}) ` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className=" container mx-auto pb-10">
        {/* // Link section  */}
        <div className="text-end">
          <ul className="menu menu-horizontal py-2 gap-5 my-2 bg-[#77777746] rounded-2xl px-5">
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
        <Outlet></Outlet>
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
