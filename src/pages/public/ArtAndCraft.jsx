import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import bg_img from "../../assets/ArtAndCraft/christmas_2012_new_1763.jpg";
import { Bounce, ToastContainer } from "react-toastify";

const ArtAndCraft = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/artAndCraft/all", label: "All" }, // Default selected
    { to: "/artAndCraft/cardMaking", label: "Card Making" },
    { to: "/artAndCraft/scrapbooking", label: "Scrapbooking" },
    {
      to: "/artAndCraft/paperQuillingOrigami",
      label: "Paper Quilling & Origami",
    },
    { to: "/artAndCraft/glassPainting", label: "Glass Painting" },
    { to: "/artAndCraft/lampworking", label: "Lampworking" },
    { to: "/artAndCraft/glassDyingStaining", label: "Glass Dying & Staining" },
  ];

  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto pb-10 relative">
        {/* Navbar Section */}
        <div className="text-end relative z-50">
          <div
            className="bg-[#0000006c] text-white px-5 py-2 rounded-2xl inline-block cursor-pointer mt-5"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={() => setIsOpen(!isOpen)}
          >
            Categories
            <ul
              className={`absolute right-0 mt-2 bg-gray-700 text-white rounded-xl shadow-lg transition-all duration-300 ${
                isOpen
                  ? "opacity-100 visible scale-100"
                  : "opacity-0 invisible scale-95"
              }`}
            >
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:bg-yellow-400 px-5 py-2 rounded-md"
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block text-sm font-semibold transition duration-300 ${
                        isActive ? "text-yellow-400" : "hover:text-gray-900"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Outlet for Page Content */}
        <Outlet />

        {/* Toast Notification */}
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
    </div>
  );
};

export default ArtAndCraft;
