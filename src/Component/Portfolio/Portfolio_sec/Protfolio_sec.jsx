import React, { useState } from "react";
import cart1 from "../../../assets/image/poert1.png";
import cart2 from "../../../assets/image/port2.png";
import cart3 from "../../../assets/image/port3.png";
import "./port.css";

export default function PortfolioSec() {
  const [selectedImage, setSelectedImage] = useState(null); // Store the selected image source

  const showImage = (src) => {
    setSelectedImage(src);
  };

  const hideImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {[cart1, cart2, cart3].map((cart, index) => (
        <div
          key={index}
          className="cart lg:w-1/3 md:w-1/2 sm:w-full bg-white"
        >
          <div className="inner p-6">
            <div className="over relative">
              <div
                onClick={() => showImage(cart)}
                className="overlay absolute w-full h-full bg-main-color rounded-lg cursor-pointer flex justify-center items-center"
              >
                <i className="fa-solid fa-plus text-white text-7xl"></i>
              </div>
              <img className="w-full rounded-lg" src={cart} alt={`Cart ${index + 1}`} />
            </div>
          </div>
        </div>
      ))}

      {selectedImage && (
        <div
          onClick={hideImage}
          className="back-image fixed top-0 left-0 w-screen h-screen bg-[#0d6dfd2c] z-50 flex justify-center items-center"
        >
          <img className="w-2/5 rounded-lg" src={selectedImage} alt="Selected" />
        </div>
      )}
    </>
  );
}
