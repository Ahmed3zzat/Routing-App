import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2c3e50] py-9">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between text-center">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-3 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                  LOCATION
                </h2>
                <ul className="text-white dark:text-gray-400 font-medium">
                  <li className="mb-1">
                    <p className="text-white font-normal text-xs pb-2">2215 John Daniel Drive</p>
                  </li>
                  <li>
                    <p className="text-white font-normal text-xs">TClark, MO 65243</p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                  AROUND THE WEB
                </h2>
                <ul className="text-white flex justify-center gap-3 dark:text-gray-400 font-medium">
                  <li>
                    <div className="rounded-[50%] border border-white p-2 flex justify-center items-center">
                      <i className="fa-brands fa-facebook text-xs text-white"></i>
                    </div>
                  </li>
                  <li>
                    <div className="rounded-[50%] border border-white p-2 flex justify-center items-center">
                      <i className="fa-brands fa-twitter text-xs text-white"></i>
                    </div>
                  </li>
                  <li>
                    <div className="rounded-[50%] border border-white p-2 flex justify-center items-center">
                      <i className="fa-brands fa-linkedin-in text-xs text-white"></i>
                    </div>
                  </li>
                  <li>
                    <div className="rounded-[50%] border border-white p-2 flex justify-center items-center">
                      <i className="fa-solid fa-globe text-xs text-white"></i>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                  ABOUT FREELANCER
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <p className="text-white text-xs font-normal">
                      Freelance is a free to use, licensed Bootstrap theme
                      created by Route
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer bg-[#1a252f] text-white w-full text-center py-4">
        <p className="text-xs">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
