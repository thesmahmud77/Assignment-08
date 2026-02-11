import React from "react";
import NavMenu from "../../Components/Navbar/NavMenu";
import Footer from "../../Components/Footer/Footer";
import AppsAllApp from "./AppsAllApp";

const Apps = () => {
  return (
    <div>
      <NavMenu></NavMenu>
      <AppsAllApp></AppsAllApp>
      <Footer></Footer>
    </div>
  );
};

export default Apps;
