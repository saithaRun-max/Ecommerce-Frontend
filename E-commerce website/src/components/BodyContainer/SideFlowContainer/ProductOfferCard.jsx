import React from "react";
import { BiSolidDiscount } from "react-icons/bi";
import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductOfferCard = ({ data }) => {


  return (
    <>
      <div className="absolute w-52 h-6 pl-3 flex align-middle bg-slate-300 rounded-t-md ">
        <BiSolidDiscount className="text-2xl" />
        <p className="font-semibold ml-2 ">{data.offer} OFF</p>
      </div>
    <div className="w-52 h-[277px] border border-gray-300 rounded-md ">
    
      <ProductCard noBorder={data ? true : false} cardData={data} />
    </div>
    </>
  );
};

export default ProductOfferCard;
