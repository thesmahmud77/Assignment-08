import React, { Suspense, useEffect, useState } from "react";
import NavMenu from "../../Components/Navbar/NavMenu";
import Footer from "../../Components/Footer/Footer";
import { useLoaderData } from "react-router";
import { getStoredBook, removeFromStoredDB } from "../../Utility/addToDB";
import LSAppList from "./LSAppList";
import { toast } from "react-toastify";

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

  const handleUninstall = (id) => {
    removeFromStoredDB(id);
    const remainingApps = InsAppList.filter((app) => app.id != id);
    setInsAppList(remainingApps);
    toast("App Uninstalled Successfully!");
  };

  return (
    <div>
      <NavMenu></NavMenu>
      <Suspense fallback={<h1>Apps Loding</h1>}>
        <LSAppList
          InsAppList={InsAppList}
          setInsAppList={setInsAppList}
          handleUninstall={handleUninstall}
        ></LSAppList>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default InstallApps;
