import React, { use } from "react";
import TreSingleData from "./TreSingleData";

const TrendingAppMap = ({ homeTrendingPromise }) => {
  const TrendingData = use(homeTrendingPromise);
  console.log(TrendingData);
  return (
    <div>
      <h1 className="font-bold text-5xl mt-5">Trending Apps</h1>
      <p className="mt-5">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-4 gap-5 my-10">
        {TrendingData.map((SingleTreData) => (
          <TreSingleData SingleTreData={SingleTreData}></TreSingleData>
        ))}
      </div>
    </div>
  );
};

export default TrendingAppMap;
