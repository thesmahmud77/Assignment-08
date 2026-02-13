import React from "react";
import { useLoaderData, useParams } from "react-router";
import NavMenu from "../../../Components/Navbar/NavMenu";
import Footer from "../../../Components/Footer/Footer";
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import Rating from "./Rating";

const SingleHomeData = () => {
  const HALoader = useLoaderData();
  const { id } = useParams();
  const HomeParams = parseInt(id);
  const SingleHFilter = HALoader.find((book) => book.id === HomeParams);
  console.log(SingleHFilter);
  const { image, companyName, downloads, ratings, longDescription } =
    SingleHFilter;
  return (
    <div>
      <NavMenu></NavMenu>
      <div>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img className="max-h-100" src={image} alt="Movie" />
          </figure>
          <div className="card-body">
            <div className="text-left">
              <h2 className="card-title font-bold text-3xl">{companyName}</h2>
              <p className="mt-1">
                Develop By <spen className="text-[#632EE3]">smahmud77</spen>
              </p>
            </div>
            <div className="card-actions justify-start text-left mt-10 gap-10">
              <div className="flex flex-col items-center justify-start">
                <FaDownload className="text-3xl font-bold text-[#54CF68]" />
                <p>Downloads</p>
                <h1 className="card-title font-bold text-2xl">{downloads}</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FaStar className="text-3xl font-bold text-[#FF8811]" />
                <p>Average Ratings</p>
                <h1 className="card-title font-bold text-2xl">{downloads}</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <BiSolidLike className="text-3xl font-bold text-[#632EE3]" />
                <p>Average Ratings</p>
                <h1 className="card-title font-bold text-2xl">{downloads}</h1>
              </div>
            </div>
            <button className="bg-[#632EE3] w-50 h-10 rounded-[5px] btn btn-primary mt-5">
              Install Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full mt-20 mb-20">
        {ratings.map((rating, index) => {
          const percentage = (rating.count / 6000) * 100;

          return (
            <div key={index} className="flex items-center gap-4">
              <span className="w-16 text-sm">{rating.name}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-amber-600 h-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="w-12 text-sm font-semibold">{rating.count}</span>
            </div>
          );
        })}
      </div>
      <div className="Description text-left mb-10">
        <h1 className="font-bold text-1xl">Description</h1>
        <p>{longDescription}</p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleHomeData;
