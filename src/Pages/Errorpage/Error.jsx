import React from "react";
import NavMenu from "../../Components/Navbar/NavMenu";
import Footer from "../../Components/Footer/Footer";
import ErrorContent from "./ErrorContent";

const Error = () => {
  return (
    <div>
      <NavMenu></NavMenu>
      <ErrorContent></ErrorContent>
      <Footer></Footer>
    </div>
  );
};

export default Error;
