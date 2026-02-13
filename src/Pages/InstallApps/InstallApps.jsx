import React, { Suspense, useEffect, useState } from "react";
import NavMenu from "../../Components/Navbar/NavMenu";
import Footer from "../../Components/Footer/Footer";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../Utility/addToDB";
import LSAppList from "./LSAppList";
import { HiH1 } from "react-icons/hi2";

const InstallApps = () => {
  const data = useLoaderData();
  const [InsAppList, setInsAppList] = useState([]);

  useEffect(() => {
    const StoedBookData = getStoredBook();
    const convertedStoredData = StoedBookData.map((id) => parseInt(id));
    const Appslist = data.filter((Myapps) =>
      convertedStoredData.includes(Myapps.id),
    );
    setInsAppList(Appslist);
  }, []);

  return (
    <div>
      <NavMenu></NavMenu>
      <Suspense fallback={<h1>Apps Loding</h1>}>
        <LSAppList
          InsAppList={InsAppList}
          setInsAppList={setInsAppList}
        ></LSAppList>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default InstallApps;
