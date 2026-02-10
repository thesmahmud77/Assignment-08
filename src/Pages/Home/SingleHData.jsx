import React from "react";
import { GoDownload } from "react-icons/go";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router";

const SingleHData = ({ HomeData }) => {
  //   console.log(HomeData);
  const { id, image, companyName } = HomeData;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <Link to={`/SingleHomeData/${id}`}>
        <figure className="px-10 pt-10 h-[200px]">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
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
      </Link>
    </div>
  );
};

export default SingleHData;
