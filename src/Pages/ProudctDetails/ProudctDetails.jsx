import React from "react";
import { useParams } from "react-router";

const ProductDetailspro = fetch("./Data8.json").then((res) => res.json());

const ProudctDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>This is Product Details Page</h1>
    </div>
  );
};

export default ProudctDetails;
