import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import heroImage from "../../assets/hero.png";
import { Link } from "react-router";

const HeroBanner = () => {
  return (
    <div>
      <div>
        <div className="mt-30">
          <h1 className="text-6xl text-black font-bold">
            We Build <br />{" "}
            <span className="font-extrabold text-[#632EE3]">Productive</span>{" "}
            Apps
          </h1>
          <p className="px-30 py-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            ullam, sint aspernatur natus unde, reprehenderit saepe velit
            molestiae accusantium aut tempore, optio laboriosam. Quae est neque
            exercitationem! Amet, voluptas deleniti.
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 mx-auto">
          <a href="https://play.google.com/" target="_blank">
            <button className="btn btn-soft btn-primary py-5 px-6 gap-3">
              <FaGooglePlay />
              Google Play
            </button>
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <button className="btn btn-soft btn-primary py-5 px-6 gap-3">
              <FaAppStoreIos />
              App Store
            </button>
          </a>
        </div>
        <div className=" flex items-center justify-center mt-15">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
