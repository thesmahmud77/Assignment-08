import React from "react";
import { GoStarFill } from "react-icons/go";
import { GoDownload } from "react-icons/go";

const TreSingleData = ({ SingleTreData }) => {
  const { image, companyName, ratingAvg } = SingleTreData;
  console.log(SingleTreData);
  return (
    <div>
      <img className="max-h-50" src={image} alt="" />
      <h1 className=" text-xl mt-2 text-left py-5.0">{companyName}</h1>
      <div className="flex items-center justify-between p-2">
        <div className="bg-[#F1F5E8] flex items-center justify-between text-[#00D390] font-bold gap-2 px-5 py-2 rounded-xl">
          <GoDownload />
          <h2>9M</h2>
        </div>
        <div className="bg-[#FFF0E1] flex items-center justify-between text-[#FF8811] font-bold gap-2 px-5 py-2 rounded-xl">
          {ratingAvg}
          <GoStarFill />
        </div>
      </div>
    </div>
  );
};

export default TreSingleData;
