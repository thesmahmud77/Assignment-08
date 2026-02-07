import React from "react";
import NavMenu from "../Navbar/NavMenu";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import HeroBanner from "../Hero/HeroBanner";
import SecondSection from "../SecondSection/SecondSection";

const Root = () => {
  return (
    <div>
      <NavMenu></NavMenu>
      <HeroBanner></HeroBanner>
      <SecondSection></SecondSection>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
