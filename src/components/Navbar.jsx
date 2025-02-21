import React from "react";
import img from "../assets/Navbar/img2.jpg";
import logo from "../assets/Navbar/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { IoIosLogIn } from "react-icons/io";

const Navbar = () => {
  const link = (
    <>
      {/* <NavLink>dsad</NavLink>
      <NavLink>dasd</NavLink>
      <NavLink>asd</NavLink> */}
    </>
  );
  return (
    <div
      className="relative bg-no-repeat bg-center bg-cover shadow-2xl"
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
        <div>{link}</div>
        <div>
          <Link to="/login">
            <Button
              color="blue"
              className="btn btn-outline border-0 bg-[#00000067] font-bold text-lg flex gap-2 items-center py-2 hover:opacity-90 hover:scale-105"
            >
              <IoIosLogIn className="text-2xl" />
              <span>SignIn</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
