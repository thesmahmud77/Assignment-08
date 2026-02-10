import TreSingleData from "./TreSingleData";

const TrendingAppMap = ({ Data8Loader }) => {
  console.log(Data8Loader);
  return (
    <div>
      <h1 className="font-bold text-5xl mt-5">Trending Apps</h1>
      <p className="mt-5 text-[]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-4 gap-5 my-10">
        {Data8Loader.map((SingleTreData) => (
          <TreSingleData SingleTreData={SingleTreData}></TreSingleData>
        ))}
      </div>
    </div>
  );
};

export default TrendingAppMap;
