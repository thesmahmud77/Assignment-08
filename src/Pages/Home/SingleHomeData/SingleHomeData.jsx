import React from "react";
import { useLoaderData, useParams } from "react-router";
import NavMenu from "../../../Components/Navbar/NavMenu";
import Footer from "../../../Components/Footer/Footer";
import SingleHomeFullPage from "./SingleHomeFullPage";

const SingleHomeData = () => {
  const HALoader = useLoaderData();
  const { id } = useParams();
  const HomeParams = parseInt(id);
  const SingleHFilter = HALoader.find((book) => book.id === HomeParams);

  return (
    <div>
      <img src={SingleHFilter.image} alt="" />
    </div>
  );
};

export default SingleHomeData;
