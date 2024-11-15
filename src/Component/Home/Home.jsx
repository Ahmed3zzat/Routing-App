import React from "react";
import icon from "../../assets/image/download.svg";
import centralImage from "../../assets/image/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="home bg-main-color text-white">
        <div className="container h-[98vh] flex flex-wrap flex-col justify-center items-center flex-column mx-auto">
          <div className="box flex justify-center items-start">
            <img className="w-2/3" src={centralImage} alt="user-icon" />
          </div>
          <div className="text-center py-4">
            <h2 className="text-3xl font-bold uppercase">start Framework</h2>

            <div className="star flex justify-center items-baseline gap-2">
              <span className="inline-block bg-white h-[0.2rem] w-16"></span>
              <span><i className="inline-block align-baseline  fa-solid fa-star text-[11px]"></i></span>
              <span className="inline-block bg-white h-[0.2rem] w-16"></span>
            </div>

            <p className="mt-2 text-xs">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  );
}
