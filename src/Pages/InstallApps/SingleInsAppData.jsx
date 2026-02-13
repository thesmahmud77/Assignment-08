import React from "react";
import { FiDownload } from "react-icons/fi";
import { GiRoundStar } from "react-icons/gi";

const SingleInsAppData = ({ SinInstallApps, handleUninstall }) => {
  const { id, image, companyName, ratingAvg, size, downloads } = SinInstallApps;
  return (
    <div>
      <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-xl/5 ring ">
        <figure className="w-30 overflow-hidden">
          <img
            className="rounded-xl w-30 h-20 object-cover"
            src={image}
            alt=""
          />
        </figure>
        <div className="items-start text-start text-black w-1/1 mx-5">
          <h1 className="font-medium text-xl">{companyName}</h1>
          <div className="flex items-center justify-start gap-5 text-start items-start">
            <p className="text-[#00D390] flex items-center justify-center gap-2">
              <FiDownload />
              {downloads}
            </p>
            <p className="text-[#FF8811] flex items-center justify-center gap-2">
              <GiRoundStar />
              {ratingAvg}
            </p>
            <p className="text-[#627382] flex items-center justify-center gap-2">
              {size} MB
            </p>
          </div>
        </div>
        <button
          onClick={() => handleUninstall(id)}
          className="btn bg-[#00D390]"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default SingleInsAppData;
