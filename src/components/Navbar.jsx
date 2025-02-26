import React, { useContext, useState } from "react";
import img from "../assets/Navbar/img2.jpg";
import logo from "../assets/Navbar/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { IoIosLogIn } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { userInfo } from "../context/Verification";
import { CgLogOut } from "react-icons/cg";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, handleLogOut } = useContext(userInfo);
  console.log(user);
  const handleLogOutBtn = () => {
    handleLogOut()
      .then((u) => {
        Swal.fire({
          title: "Log Out Successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Art And Craft", path: "/artAndCraft/all" },
    { name: "Add Item", path: "/addItem" },
    { name: "View Item", path: "/viewItem" },
  ];

  const link = (
    <>
      <nav className=" md:space-x-5 p-2 rounded-xl bg-[#0000002c] flex">
        {navLinks.map(({ name, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `shadow-2xl px-2 relative md:text-lg text-sm font-semibold transition duration-300 group ${
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }`
            }
          >
            {name}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </NavLink>
        ))}
      </nav>
    </>
  );

  return (
    <div
      className="relative bg-no-repeat bg-center bg-cover shadow-2xl border-[#e1ff35] border-b-2 "
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-[#0807073f]"></div>
      <div className="relative container mx-auto  items-center flex justify-between py-3">
        <div>
          <a href="/">
            <img
              className="z-50 rounded-3xl p-1 bg-[#ffffff2f] w-25 mx-5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] scale-105 hover:scale-110"
              src={logo}
              alt="Logo"
            />
          </a>
        </div>
        <div className="md:flex gap-5 font-bold text-lg hidden">{link}</div>
        <div>
          {user ? (
            <>
              {user.photoURL ? (
                <div className="">
                  <div className="flex items-center gap-4 justify-center">
                    <img
                      className="w-12 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                    <button onClick={handleLogOutBtn} className="btn btn-sm">
                      <CgLogOut className="text-xl mt-1" />
                      <span>Logout</span>
                    </button>
                  </div>
                  <p>{user.email}</p>
                </div>
              ) : (
                <div className="">
                  <div className="flex items-center gap-4 justify-center">
                    <FaUser />
                    <button onClick={handleLogOutBtn} className="btn btn-sm">
                      <CgLogOut className="text-xl mt-1" />
                      <span>Logout</span>
                    </button>
                  </div>
                  <p>{user.email}</p>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex flex-col gap-2 justify-center items-center pr-5 md:pr-0">
                <Link to="/login">
                  <Button
                    color="blue"
                    className="btn btn-outline border-0 bg-[#00000067] font-bold text-md flex btn-md px-4 items-center hover:opacity-90 hover:scale-105"
                  >
                    <IoIosLogIn className="text-xl" />
                    <span>SignIn</span>
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mx-3 md:hidden">{link}</div>
    </div>
  );
};

export default Navbar;
