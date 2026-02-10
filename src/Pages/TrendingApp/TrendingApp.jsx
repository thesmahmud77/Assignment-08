import { useLoaderData } from "react-router";
import SingleHData from "../Home/SingleHData";

const TrendingApp = () => {
  const Data8Loader = useLoaderData();
  // console.log(Data8Loader);
  return (
    <div>
      <h1 className="font-bold text-5xl mt-5">Trending Apps</h1>
      <p className="mt-5 text-[]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-4 gap-5 my-10">
        {Data8Loader.map((HomeData) => (
          <SingleHData key={HomeData.id} HomeData={HomeData}></SingleHData>
        ))}
      </div>
    </div>
  );
};

export default TrendingApp;
