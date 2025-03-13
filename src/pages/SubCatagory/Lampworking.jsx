import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleCard from "../../components/SingleCard";
import NoCardFound from "./NoCardFound";
import LoadingDataModat from "./LoadingDataModat";

const Lampworking = () => {
  const LoadedData = useLoaderData();
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (Array.isArray(LoadedData)) {
      setData(LoadedData);
    } else {
      setData([]);
    }
    setLoadingData(false);
  }, [LoadedData]);
  return (
    <div>
      <h2 className="text-center text-black font-semibold text-5xl my-10 pt-5">
        Lampworking
      </h2>
      {loadingData ? (
        <div>
          <LoadingDataModat></LoadingDataModat>
        </div>
      ) : data.length ? (
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {data.map((d) => (
            <SingleCard data={d} key={d._id}></SingleCard>
          ))}
        </div>
      ) : (
        <>
          <NoCardFound></NoCardFound>
        </>
      )}
    </div>
  );
};

export default Lampworking;
