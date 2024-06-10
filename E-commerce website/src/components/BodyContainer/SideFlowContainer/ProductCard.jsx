import React, { useState } from "react";
import { sliding_img_CDN } from "../../constants.js";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../utils/cartSlice.js";

const ProductCard = ({ cardData, noBorder }) => {
  const dispatch = useDispatch();
  const [changeText, setChangeText] = useState(false);

  const { imageId, name, weight, price, deletePrice } = cardData;

  const handleAddtoCart = (product) => {
    setChangeText(true)
    dispatch(addToCart(product));
  };

  return (
    <>
      <div
        className={`w-52 h-[277px] rounded-md px-3 pb-2  +
          ${noBorder ? "border-none" : "border border-gray-300"}`}
      >
        <img className="w-48" src={sliding_img_CDN + imageId} alt="card" />

        <h4 className="font-[Roboto Mono, monospace] font-semibold text-sm -mt-3">
          {name}
        </h4>
        <p className="text-xs font-normal my-2 text-gray-500">{weight}</p>
        <div className="flex justify-between align-middle">
          <div className="flex flex-col -ml-1">
            <p className="text-sm font-semibold ">
              <LiaRupeeSignSolid className="inline-block" />
              {price / 100}
            </p>
            {deletePrice && (
              <div className="mb-">
                <del className="text-sm font-medium text-gray-500">
                  <LiaRupeeSignSolid className="inline-block" />
                  {deletePrice / 100}
                </del>
              </div>
            )}
          </div>
          <button
            className="border p-1 px-4 h-8   border-orange-400 rounded-md text-amber-600 font-semibold hover:text-white hover:bg-amber-600"
            onClick={() => handleAddtoCart(cardData)}
          >
            {"Add"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
