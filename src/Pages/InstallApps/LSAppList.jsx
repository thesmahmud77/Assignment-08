import React, { useState } from "react";
import SingleInsAppData from "./SingleInsAppData";
import { IoIosArrowDown } from "react-icons/io";

const LSAppList = ({ InsAppList, setInsAppList }) => {
  const [Sort, SetSort] = useState("");

  const handleSort = (type) => {
    SetSort(type);
    if (type == "Ratings") {
      const SortedbyRatings = [...InsAppList].sort(
        (a, b) => a.ratingAvg - b.ratingAvg,
      );
      setInsAppList(SortedbyRatings);
    }
    if (type == "Download") {
      const SortedbyDownlaod = [...InsAppList].sort(
        (a, b) => a.downloads - b.downloads,
      );
      setInsAppList(SortedbyDownlaod);
    }
    if (type == "Size") {
      const SortedbySize = [...InsAppList].sort((a, b) => a.size - b.size);
      setInsAppList(SortedbySize);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-Semibold mt-10">Your Installed Apps</h1>
      <p>Explore All Trending Apps on the Market developed by us</p>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold m-2">
            <span>{InsAppList.length}</span> Apps found
          </h3>
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By : {Sort ? Sort : ""} <IoIosArrowDown />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => handleSort("Ratings")}>
                <a>Ratings</a>
              </li>
              <li onClick={() => handleSort("Download")}>
                <a>Download</a>
              </li>
              <li onClick={() => handleSort("Size")}>
                <a>App Size</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {InsAppList.map((SinInstallApps) => (
            <SingleInsAppData
              key={SinInstallApps.id}
              SinInstallApps={SinInstallApps}
            ></SingleInsAppData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LSAppList;
