import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import "./NavMenu.css";
import { FaGithubSquare } from "react-icons/fa";
import navImage from "../../assets/logo.png";

const NavMenu = () => {
  return (
    <div className="flex items-center justify-between gap-5 bg-white">
      <div>
        <Link
          className="font-bold text-3xl text-[#632EE3] flex items-center justify-between gap-2"
          to={"/"}
        >
          <img width={40} src={navImage} alt="" />
          HERO.IO
        </Link>
      </div>
      <div className="NavMidlePart">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"Apps"}>Apps</NavLink>
        <NavLink to={"Installation"}>Installation</NavLink>
      </div>
      <div>
        <Link to={"/"}>
          <button className="bg-[#632EE3] flex items-center justify-between gap-5 p-5 py-3 rounded-xl text-white">
            <FaGithubSquare />
            Contribute
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
