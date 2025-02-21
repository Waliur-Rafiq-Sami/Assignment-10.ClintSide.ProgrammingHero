import React, { useContext, useState } from "react";
import img from "../../assets/registration/img.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { userInfo } from "../../context/Verification";
import Swal from "sweetalert2";

const Register = () => {
  const { user, setUser, createUserUsingEmail } = useContext(userInfo);
  console.log(user);
  const navigation = useNavigate();
  // const [password, setPassword] = useState("");
  // const [repeatingPassword, setRepeatingPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [eye, setEye] = useState(true);
  const [eye2, setEye2] = useState(true);
  const handleRegistrationForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.floating_first_name.value;
    const lastName = form.floating_last_name.value;
    const email = form.floating_email.value;
    const password = form.floating_password.value;
    const repeatingPassword = form.repeat_password.value;

    if (password !== repeatingPassword) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
    createUserUsingEmail(email, password)
      .then((u) => {
        Swal.fire({
          title: "User Created Successfully",
          icon: "success",
          draggable: true,
        });
        setUser(firstName + " " + lastName);
        console.log(u);
        form.reset();
      })
      .catch((err) => {
        console.error(err.message);
        Swal.fire({
          title: `${err.message}`,
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center container mx-auto">
      <div>
        <form
          className="max-w-md mx-auto p-2"
          onSubmit={handleRegistrationForm}
        >
          <p
            onClick={() => navigation("/")}
            className="md:inline-flex items-center gap-2 btn mb-10 hidden"
          >
            <FaArrowLeft />
            <span>Return Home</span>
          </p>
          <h1 className="text-3xl font-semibold mb-5 md:mt-0 mt-10">
            Registration Please
          </h1>
          {/* ..field 1 */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          {/* ..field 2 */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          {/* ..field 3 */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type={`${eye2 ? "password" : "text"}`}
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer relative"
              placeholder=" "
              required
            />
            <div
              onClick={() => setEye2(!eye2)}
              className="absolute bottom-3 right-3 text-gray-400"
            >
              {eye2 ? <IoEye /> : <IoMdEyeOff />}
            </div>
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          {/* ..field 4 */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type={`${eye ? "password" : "text"}`}
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer relative"
              placeholder=" "
              required
            />
            <div
              onClick={() => setEye(!eye)}
              className="absolute bottom-3 right-3 text-gray-400"
            >
              {eye ? <IoEye /> : <IoMdEyeOff />}
            </div>
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
          </div>
          {passwordError && (
            <p className="text-red-500 -mt-3 mb-3">Passwords do not match!</p>
          )}
          <div className="">
            <input
              id="checkbox"
              type="checkbox"
              defaultChecked
              className="checkbox"
            />
            <label htmlFor="checkbox" className="ml-2">
              Remember password
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <p className=" mt-5">
            New to this website please{",  "}
            <span
              className="text-blue-500 font-bold hover:cursor-pointer"
              onClick={() => navigation("/login")}
            >
              {" "}
              Login
            </span>
          </p>
        </form>
      </div>
      <div>
        <p
          onClick={() => navigation("/")}
          className="inline-flex items-center gap-2 btn mb-10 md:hidden"
        >
          <FaArrowLeft />
          <span>Return Home</span>
        </p>
        <img className="" src={img} alt="" />
      </div>
    </div>
  );
};

export default Register;
