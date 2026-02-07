import React, { Suspense } from "react";
import TrendingAppMap from "../../Components/TrendingApp/TrendingAppMap";

const homeTrendingPromise = fetch("./Data8.json").then((res) => res.json());

const TrendingApp = () => {
  return (
    <div>
      <Suspense fallback={<h1>Data Loading</h1>}>
        <TrendingAppMap
          homeTrendingPromise={homeTrendingPromise}
        ></TrendingAppMap>
      </Suspense>
    </div>
  );
};

export default TrendingApp;
