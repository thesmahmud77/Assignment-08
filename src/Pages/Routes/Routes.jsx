import React from "react";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../../Components/Root/Root";
import Error from "../Errorpage/Error";
import TrendingApp from "../TrendingApp/TrendingApp";
import About from "../About/About";
import ProudctDetails from "../ProudctDetails/ProudctDetails";
import SingleHomeData from "../Home/SingleHomeData/SingleHomeData";
import Apps from "../Apps_Page/Apps";
import InstallApps from "../InstallApps/InstallApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/Data8.json"),
        Component: TrendingApp,
      },
    ],
  },
  {
    path: "/SingleHomeData/:id",
    loader: () => fetch("/Data20.json"),
    Component: SingleHomeData,
  },
  {
    path: "/Apps",
    Component: Apps,
    errorElement: <Error></Error>,
    loader: () => fetch("/Data20.json"),
  },
  {
    path: "/installation",
    Component: InstallApps,
    loader: () => fetch("/Data20.json"),
  },
]);
