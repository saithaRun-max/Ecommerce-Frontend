import React from "react";
import CartBtn from "./CartBtn";
import LoginBtn from "./LoginBtn";

const HeaderRightContainer = () => {
  return (
    <div className="col-span-2 flex mr-3  justify-between align-middle">
      <LoginBtn />
      <CartBtn />
      
    </div>
  );
};

export default HeaderRightContainer;
