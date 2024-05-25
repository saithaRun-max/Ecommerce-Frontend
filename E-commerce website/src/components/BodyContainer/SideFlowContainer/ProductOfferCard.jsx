import React from "react";
import { BiSolidDiscount } from "react-icons/bi";
import ProductCard from "./ProductCard";
ProductCard;

const ProductOfferCard = ({data}) => {
  console.log(data.offer)
  return (
    <div className="w-52 border border-gray-300 rounded-md ">
      <div className="pl-3 flex align-middle bg-slate-300 ">
        <BiSolidDiscount className="text-2xl" />
        <p className="font-semibold ml-2 ">{data.offer} OFF</p>
      </div>
      <ProductCard noBorder={true} cardData={data}  />
    </div>
  );
};

export default ProductOfferCard;
