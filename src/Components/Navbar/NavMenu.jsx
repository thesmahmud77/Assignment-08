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
        <NavLink to={"/Apps"}>Apps</NavLink>
        <NavLink to={"/Installation"}>Installation</NavLink>
      </div>
      <div>
        <a href="https://github.com/thesmahmud77/Assignment-08" target="_blank">
          <button className="bg-[#632EE3] flex items-center justify-between gap-5 p-5 py-3 rounded-xl text-white btn btn-soft btn-primary py-5 px-6 gap-3">
            <FaGithubSquare className="h-50" />
            Contribute
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavMenu;
