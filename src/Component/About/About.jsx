import React from "react";

export default function About() {
  return (
    <div className="home bg-main-color text-white">
      <div className="container h-[98vh] flex flex-wrap flex-col justify-center items-center flex-column mx-auto">
        <div className="text-center py-4">
          <h2 className="text-3xl font-bold uppercase">about component</h2>

          <div className="star flex justify-center items-baseline gap-2">
            <span className="inline-block bg-white h-[0.2rem] w-16"></span>
            <span>
              <i className="inline-block align-baseline  fa-solid fa-star text-[11px]"></i>
            </span>
            <span className="inline-block bg-white h-[0.2rem] w-16"></span>
          </div>
          <div className="two-para flex justify-center gap-7 mt-4 md:flex-row sm:flex-col text-center">
            <p className="text-left text-xs leading-5 sm:w-2/4 sm:mx-auto sm:text-sm md:w-3/4 md:mx-auto md:text-md px-11">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="text-left text-xs leading-5 sm:w-2/4 sm:mx-auto sm:text-sm md:w-3/4 md:mx-auto md:text-md px-11">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
