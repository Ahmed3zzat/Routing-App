import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import list from "../../assets/image/download.svg";

export default function Nav() {
  window.onscroll = function () {
    let nav = document.querySelector(".navbar");
    let scrollTop = window.scrollY;
    if (scrollTop != 0) {
      nav.classList.replace("py-5", "py-2");
    } else {
      nav.classList.replace("py-2", "py-5");
    }
  };

  const [navTool, setNavTool] = useState(false);
  const viewList = () => {
    setNavTool(!navTool);
  };

  return (
    <>
      <div className="navbar bg-second-color text-white flex justify-center fixed top-0 start-0 end-0 z-40 py-5 transition-all duration-[0.5s] xl:px-44">
        <div className="container flex justify-between flex-wrap mx-auto">
          <div className="logo">
            <NavLink onClick={viewList} to="">
              <h1 className="font-bold text-2xl spa">Start Framework</h1>
            </NavLink>
          </div>

          <ul className="sm:hidden lg:flex  links justify-between list-none gap-4">
            <li>
              <NavLink to="about" className="font-bold uppercase text-xs">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="portfolio" className="font-bold uppercase text-xs">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className="font-bold uppercase text-xs">
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="sm:block lg:hidden icon border border-1 border-gray-800 p-2 rounded-md cursor-pointer">
            <i
              onClick={viewList}
              className="fa-solid fa-bars text-2xl align-middle text-gray-600"
            ></i>
          </div>

          {navTool && (
            <ul className="sm:flex lg:hidden justify-between flex-col items-start list-none gap-4 w-full">
              <li>
                <NavLink
                  to="about"
                  className="font-bold uppercase text-xs"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="portfolio"
                  className="font-bold uppercase text-xs"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className="font-bold uppercase text-xs"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
