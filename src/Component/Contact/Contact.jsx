import React from "react";

export default function Contact() {
  return (
    <>
      <div className="text-center py-4 mt-20">
        <h2 className="text-3xl font-bold uppercase text-[#2c3e50]">
          conatct section
        </h2>
        <div className="star flex justify-center items-baseline gap-2">
          <span className="inline-block bg-second-color h-[0.2rem] w-16"></span>
          <span>
            <i className="inline-block align-baseline  fa-solid fa-star text-[11px] text-[#2c3e50]"></i>
          </span>
          <span className="inline-block bg-second-color h-[0.2rem] w-16"></span>
        </div>
      </div>

      <form className="sm:mx-4 max-w-md md:mx-auto h-screen mt-12 ">
        <div className="relative z-0 w-full mb-7 group">
          <input
            type="text"
            name="floating_name"
            id="floating_name"
            className="block py-2.5 px-0 md:w-full text-xs  bg-transparent border-0 border-b-[1px] sm:w-[95vh] border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-[#1abc9c] focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-xs text-gray-600  dark: duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-focus:dark:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userName
          </label>
        </div>

        <div className="relative z-0 w-full mb-7 group">
          <input
            type="number"
            name="floating_age"
            id="floating_age"
            className="block py-2.5 px-0 md:w-full text-xs  bg-transparent border-0 border-b-[1px] sm:w-[95vh] border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-[#1abc9c] focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_age"
            className="peer-focus:font-medium absolute text-xs text-gray-600  dark: duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9c] peer-focus:dark:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userAge
          </label>
        </div>

        <div className="relative z-0 w-full mb-7 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 md:w-full text-xs  bg-transparent border-0 border-b-[1px] sm:w-[95vh] border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-[#1abc9c] focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-xs text-gray-600  dark: duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9c] peer-focus:dark:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userEmail
          </label>
        </div>
        <div className="relative z-0 w-full mb-7 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 md:w-full text-xs  bg-transparent border-0 border-b-[1px] sm:w-[95vh] border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-[#1abc9c] focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-xs text-gray-600  dark: duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9c] peer-focus:dark:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userPassword
          </label>
        </div>

        <button
          type="button"
          className="text-white bg-[#1abc9c] hover:bg-[#1ab293] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-md text-xs w-full sm:w-auto px-3 py-1.5 text-center dark:bg-[#1abc9c] dark:hover:bg-[#1abc9c] dark:focus:bg-[#1abc9c]"
        >
          send Message
        </button>
      </form>
    </>
  );
}
