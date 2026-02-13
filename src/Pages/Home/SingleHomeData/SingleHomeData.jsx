import React from "react";
import { useLoaderData, useParams } from "react-router";
import NavMenu from "../../../Components/Navbar/NavMenu";
import Footer from "../../../Components/Footer/Footer";
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";

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
          </div>
        </div>
        <div className="progressBar flex flex-col items-start gap-5 m-10 w-[100%]">
          {ratings.map((sinRat) => (
            <progress
              className="progress w-{sinRat.counts}"
              value={0}
              max="100"
            ></progress>
          ))}
        </div>
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
