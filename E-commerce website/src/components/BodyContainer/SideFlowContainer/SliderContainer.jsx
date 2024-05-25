import React from "react";
import ProductCard from "./ProductCard";
import ProductOfferCard from "./ProductOfferCard";
import productsData from "../../productsData.js";

const SliderContainer = () => {
  // console.log(...productsData[0].productsList);
  return (
    <div className="mt-3 ">
      {productsData.map((item, index) => (
        <div key={index} className="mb-12">
          <div className="my-3">
            <h2 className="font-semibold text-2xl ">{item.productHeader}</h2>
          </div>
          <div className="flex flex-wrap justify-between gap-y-5">
            {item.productsList.map((product) =>
              product.offer ? (
                <ProductOfferCard key={index} data={product} />
              ) : (
                <ProductCard key={index} cardData={product} />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderContainer;
