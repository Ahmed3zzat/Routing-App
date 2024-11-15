import React from "react";

import Protfolio_sec from "./Portfolio_sec/Protfolio_sec";
export default function Portfolio() {
  return (
    <div className="h-[98vh]">
      <div className="text-center py-4 mt-20">
        <h2 className="text-3xl font-bold uppercase text-[#2c3e50]">
          portfolio component
        </h2>
        <div className="star flex justify-center items-baseline gap-2">
          <span className="inline-block bg-second-color h-[0.2rem] w-16"></span>
          <span>
            <i className="inline-block align-baseline  fa-solid fa-star text-[11px] text-[#2c3e50]"></i>
          </span>
          <span className="inline-block bg-second-color h-[0.2rem] w-16"></span>
        </div>
      </div>
      <div className="parent flex flex-wrap justify-center items-center">
        <Protfolio_sec />
        <Protfolio_sec />
      </div>
    </div>
  );
}
