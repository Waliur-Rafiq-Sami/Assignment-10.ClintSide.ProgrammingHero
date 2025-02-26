import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleCard from "../../components/SingleCard";
import img from "../../assets/empty/not-removebg-preview.png";

const Lampworking = () => {
  const LoadedData = useLoaderData();
  console.log(LoadedData);
  return (
    <div>
      <h2 className="text-center text-black font-semibold text-5xl my-10 pt-5">
        Lampworking
      </h2>
      {LoadedData.length ? (
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {LoadedData.map((d) => (
            <SingleCard data={d} key={d._id}></SingleCard>
          ))}
        </div>
      ) : (
        <>
          <img className="my-10 " src={img} alt="" />
        </>
      )}
    </div>
  );
};

export default Lampworking;
