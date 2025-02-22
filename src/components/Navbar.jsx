import React, { useContext, useState } from "react";
import img from "../assets/Navbar/img2.jpg";
import logo from "../assets/Navbar/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Button, IconButton } from "@material-tailwind/react";
import { IoIosLogIn } from "react-icons/io";
import { FaGoogle, FaUser } from "react-icons/fa";
import { userInfo } from "../context/Verification";
import { CgLogOut } from "react-icons/cg";
import { ImGithub } from "react-icons/im";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, handleLogOut, usingGoogleSignIn, usingGithubSignIn } =
    useContext(userInfo);
  // console.log(user);

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
          {user ? (
            <>
              {user.photoURL ? (
                <div className="">
                  <div className="flex items-center gap-4 justify-center">
                    <img
                      className="w-12 rounded-full"
                      src={user.photoURL}
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
              <div className="flex flex-col gap-2 justify-center items-center">
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
    </div>
  );
};

export default Navbar;
