import React from "react";
import Cart from "./Cart";
import Login from "./Login";

const HeaderRightContainer = () => {
  return (
    <div className="col-span-2 flex mr-3  justify-between align-middle">
      <Login />
      <Cart />
      
    </div>
  );
};

export default HeaderRightContainer;
