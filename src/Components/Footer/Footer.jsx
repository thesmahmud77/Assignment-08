import React from "react";
import navImage from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10 mt-10">
      <aside>
        <img width={50} src={navImage} alt="" />
        <p className="font-bold text-2xl">
          Assignemtn-08.
          <br />
          Programming Hero Batch No-12
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav></nav>
    </footer>
  );
};

export default Footer;
