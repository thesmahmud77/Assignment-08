import { useLoaderData } from "react-router";
import AppSData from "./AppSData";

const AppsAllApp = () => {
  const allApps = useLoaderData();
  //   console.log(allApps);
  return (
    <div className="bg-[#F1F5E8]">
      <div className="m-5">
        <h1 className="font-bold text-3xl pt-5">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mt-5">
          <h1 className="font-bold text-1xl">
            <span>({allApps.length})</span> Apps Found
          </h1>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-5 gap-5">
          {allApps.map((SingleAppsData) => (
            <AppSData SingleAppsData={SingleAppsData}></AppSData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppsAllApp;
