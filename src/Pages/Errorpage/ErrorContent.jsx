import React from "react";
import errorImage from "../../assets/App-Error.png";

const ErrorContent = () => {
  return (
    <div className="flex flex-col items-center justify-center m-20">
      <img src={errorImage} alt="" />
      <h1 className="font-bold text-5xl">OPPS!! APP NOT FOUND</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        beatae.
      </p>
      <button class="btn btn-primary mt-5 px-10">Go Back !</button>
    </div>
  );
};

export default ErrorContent;
