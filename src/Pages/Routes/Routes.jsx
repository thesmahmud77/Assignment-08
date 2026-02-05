import React from "react";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../../Components/Root/Root";
import Error from "../Errorpage/Error";
import TrendingApp from "../TrendingApp/TrendingApp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: TrendingApp,
      },
    ],
  },
]);
