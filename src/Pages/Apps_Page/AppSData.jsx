import React from "react";
import { GoDownload } from "react-icons/go";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router";

const AppSData = ({ SingleAppsData }) => {
  console.log(SingleAppsData);
  const { image, companyName } = SingleAppsData;
  return (
    <div className="bg-white p-3 rounded-xl">
      <figure className="text-center">
        <img className="max-h-50 w-full rounded-xl" src={image} alt="" />
      </figure>
      <div className="card-body items-center text-center mt-2">
        <h2 className="card-title">{companyName}</h2>

        <div className="flex items-center justify-between gap-10">
          <button className="btn text-[#00D390] bg-[#F1F5E8]">
            <GoDownload />
            Like
          </button>
          <button className="btn text-[#FF8811] bg-[#FFF0E1]">
            <MdOutlineStarPurple500 />
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppSData;
