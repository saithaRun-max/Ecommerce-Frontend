import React from "react";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

const CartCardContainer = () => {
  const { items } = useSelector((store) => store.cart);


  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <CartCard key={i} cardData={item} />
      ))}
    </div>
  );
};

export default CartCardContainer;
