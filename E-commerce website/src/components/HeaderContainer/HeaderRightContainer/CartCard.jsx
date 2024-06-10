import React, { useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { sliding_img_CDN } from "../../constants.js";
import { removeFromCart } from "../../../utils/cartSlice.js";
import { useDispatch } from "react-redux";

const CartCard = ({ cardData }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const { imageId, name, weight, price, deletePrice } = cardData;
  const handleQuantity = (changeQty) => {
    if (changeQty == "increse") {
      setQty(qty + 1);
    } else {
      if (qty <= 1) {
        dispatch(removeFromCart(imageId));
      } else {
        setQty(qty - 1);
      }
    }
  };

  return (
    <div className="">
      <div className="flex align-middle">
        <div className="w-28">
          <img
            className="w-20"
            src={sliding_img_CDN + imageId}
            alt="Product-Image"
          />
        </div>
        <div className="flex justify-between">
          <div className="w-36 ">
            <p className="font-normal text-xs">{name}</p>
            <p className="text-xs font-medium text-slate-600 mt-3">{weight}</p>
            <p className="text-sm font-semibold mt-1 -ml-1">
              <LiaRupeeSignSolid className="inline-block" />
              {price / 100}
            </p>
          </div>

          <div>
            <div className="py-2 px-2 w-[70px] bg-amber-800 border border-gray-200 rounded-lg">
              <div className="w-full flex justify-between items-center ">
                <p className="text-sm text-white font-medium ">{qty}</p>
                <div className="flex justify-end items-center g">
                  <button
                    type="button"
                    onClick={() => {
                      handleQuantity("decrese");
                    }}
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
                    onClick={() => handleQuantity("increse")}
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
