import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductOfferCard from "./ProductOfferCard";
import productsData from "../../productsData.js";
import CardShimmer from "../Shimmer ui/CardShimmer.jsx";


const SliderContainer = () => {
  const [data, setData] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(fetchData(productsData), 5000);
    const Scroll = window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer), window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchData = (scrollData) => {
    setData((data) => [...data, ...scrollData]);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchData(productsData);
      console.log("scrollTriggred");
    }
  };

  return (
    <div className="mt-3 ">
      {data.length <= 0 ? (
        <CardShimmer />
      ) : (
        data.map((item, index) => (
          <div key={index} className="mb-12">
            <div className="my-3">
              <h2 className="font-semibold text-2xl ">{item.productHeader}</h2>
            </div>
            <div className="flex flex-wrap justify-between gap-y-5">
              {item.productsList.map((product, index) =>
                product.offer ? (
                  <ProductOfferCard key={index} data={product} />
                ) : (
                  <ProductCard key={index} cardData={product} />
                )
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SliderContainer;
