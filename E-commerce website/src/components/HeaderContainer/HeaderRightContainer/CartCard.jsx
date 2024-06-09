import React from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";

const CartCard = () => {
  return (
    <div className="">
      <div className="flex align-middle">
        <div className="w-28">
          <img
            className="w-20"
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto/app/assets/products/sliding_images/jpeg/7a97253f-581e-4c0a-b48e-37e7a7066300.jpg"
            alt="Product-Image"
          />
        </div>
        <div className="flex justify-between">
          <div className="w-36 ">
            <p className="font-normal text-xs">{"Milk mist bread"}</p>
            <p className="text-xs font-medium text-slate-600 mt-3">{"500 g"}</p>
            <p className="text-sm font-semibold mt-1 -ml-1">
              <LiaRupeeSignSolid className="inline-block" />
              {"30"}
            </p>
          </div>

          <div>
            <div className="py-2 px-2 w-[70px] bg-amber-800 border border-gray-200 rounded-lg">
              <div className="w-full flex justify-between items-center ">
                <input
                  className="w-full p-0 text-sm text-white font-medium bg-transparent border-0  focus:ring-0"
                  type="text"
                  value={"10"}
                />
                <div className="flex justify-end items-center g">
                  <button
                    type="button"
                    className=" inline-flex justify-center items-center  text-sm  text-gray-800 shadow-sm hover:cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <svg
                      className="flex-shrink-0 size-3 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center  text-sm  text-gray-800 shadow-sm "
                  >
                    <svg
                      className="flex-shrink-0 size-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
