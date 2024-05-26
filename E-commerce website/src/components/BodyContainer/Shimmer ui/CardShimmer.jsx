import React from "react";

const CardShimmer = () => {
  return (
    <div className="flex mt-14 flex-wrap justify-between gap-y-5 ">
      {Array(30)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className={`w-52 h-[277px] rounded-md border border-gray-300  space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse `}
          >
            <div className="h-36 w-44 mt-6 m-4 bg-gray-200 rounded-lg sm:w-44 dark:bg-gray-300"></div>
            <div className="w-40 ">
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-300 w-40 mb-4 -ml-3"></div>
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-300 w-6 mb-2.5 -ml-2"></div>

              <div className="h-6 ml-24 bg-gray-200 rounded-md dark:bg-gray-300 w-16 mb-2.5"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardShimmer;
