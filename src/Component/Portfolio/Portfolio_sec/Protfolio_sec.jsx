import React, { useState } from "react";
import cart1 from "../../../assets/image/poert1.png";
import cart2 from "../../../assets/image/port2.png";
import cart3 from "../../../assets/image/port3.png";
import "./port.css";
export default function Protfolio_sec() {
  const [visible, setVisible] = useState(false);

  const showVisible = () => {
    setVisible(true);
  };
  const hideVisible = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="cart lg:w-1/3 md:w-1/2  sm:w-full bg-white">
        <div className="inner p-6">
          <div className="over relative">
            <div
              onClick={showVisible}
              className="overlay absolute w-full h-full bg-main-color rounded-lg cursor-pointer flex justify-center items-center"
            >
              <i class="fa-solid fa-plus text-white text-7xl"></i>
            </div>
            <img className="w-full rounded-lg" src={cart1} alt="" />
          </div>
        </div>
      </div>
      {visible && (
        <div
          onClick={hideVisible}
          className="back-image fixed top-0 left-0 w-screen h-screen bg-[#0d6dfd2c] z-50 flex justify-center items-center"
        >
          <img className="w-2/5 rounded-lg" src={cart1} alt="" />
        </div>
      )}
      <div className="cart lg:w-1/3 md:w-1/2  sm:w-full bg-white">
        <div className="inner p-6">
          <div className="over relative">
            <div
              onClick={showVisible}
              className="overlay absolute w-full h-full bg-main-color rounded-lg cursor-pointer flex justify-center items-center"
            >
              <i class="fa-solid fa-plus text-white text-7xl"></i>
            </div>
            <img className="w-full rounded-lg" src={cart2} alt="" />
          </div>
        </div>
      </div>
      {visible && (
        <div
          onClick={hideVisible}
          className="back-image fixed top-0 left-0 w-screen h-screen bg-[#0d6dfd2c] z-50 flex justify-center items-center"
        >
          <img className="w-2/5 rounded-lg" src={cart2} alt="" />
        </div>
      )}
      <div className="cart lg:w-1/3 md:w-1/2  sm:w-full bg-white">
        <div className="inner p-6">
          <div className="over relative">
            <div
              onClick={showVisible}
              className="overlay absolute w-full h-full bg-main-color rounded-lg cursor-pointer flex justify-center items-center"
            >
              <i class="fa-solid fa-plus text-white text-7xl"></i>
            </div>
            <img className="w-full rounded-lg" src={cart3} alt="" />
          </div>
        </div>
      </div>
      {visible && (
        <div
          onClick={hideVisible}
          className="back-image fixed top-0 left-0 w-screen h-screen bg-[#0d6dfd2c] z-50 flex justify-center items-center"
        >
          <img className="w-2/5 rounded-lg" src={cart3} alt="" />
        </div>
      )}
    </>
  );
}
