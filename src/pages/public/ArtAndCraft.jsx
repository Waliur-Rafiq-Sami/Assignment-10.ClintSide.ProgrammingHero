import React, { useContext, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import bg_img from "../../assets/ArtAndCraft/christmas_2012_new_1763.jpg";

const ArtAndCraft = () => {
  const LoadedData = useLoaderData();
  const [data, setData] = useState(LoadedData);
  console.log(data);

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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtAndCraft;
