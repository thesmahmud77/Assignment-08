import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import "./NavMenu.css";
import { FaGithubSquare } from "react-icons/fa";
import navImage from "../../assets/logo.png";

const NavMenu = () => {
  return (
    <div className="flex items-center justify-between gap-5 bg-white">
      <div className="text-black">
        <Link
          className="font-bold text-3xl text-[#632EE3] flex items-center justify-between gap-2 text-black"
          to={"/"}
        >
          <img width={40} src={navImage} alt="" />
          HERO.IO
        </Link>
      </div>
      <div className="NavMidlePart">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/Apps"}>Apps</NavLink>
        <NavLink to={"/installation"}>Installation</NavLink>
      </div>

      <div></div>
      <div className="flex items-center">
        <a
          href="https://github.com/themahmud77/Assignment-08"
          target="_blank"
          className="flex items-center gap-2 bg-[#7C3AED] text-white px-6 py-2 rounded-lg font-medium "
        >
          <FaGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default NavMenu;
