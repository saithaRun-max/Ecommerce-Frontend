import { useState } from "react";
import { RxLapTimer } from "react-icons/rx";
import CartCard from "./CartCard";
import CartCardContainer from "./CartCardContainer";
import { RxCross2 } from "react-icons/rx";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const CartPage = () => {
  const { items } = useSelector((store) => store.cart);
  const [hideCart, setHideCart] = useState(false);
  if (hideCart) return <Navigate to="/" />;

  return (
    <>
      <div className=" w-screen h-[540px] bg-rose-900 bg-opacity-40 bg-blend-saturation">
        <div className="absolute -right-2 -top-4   ">
          <div className="w-[380px] max-h-[610px] bg-slate-300 p-3 rounded-md ">
            <div className="m-5 ">
              <div className="flex justify-between align-middle">
                <h4 className="font-semibold">My Cart</h4>
                <button className="p-1 mt-1" onClick={() => setHideCart(true)}>
                  <RxCross2 />
                </button>
              </div>

              <div className="flex align-middle  m-4 mt-7">
                <div className="mr-5 ">
                  <RxLapTimer className="text-2xl" />
                </div>
                <div className="-mt-2">
                  <p className="font-bold text-sm">Delivery in 11 minutes</p>
                  <p className="text-xs">{`Shipment of ${items.length}  items`}</p>
                </div>
              </div>
              <div className="mt-10 max-h-[360px] overflow-y-scroll">
                {!items.length ? (
                  <h1 className="font-semibold text-gray-800 text-center text-lg">
                    Your Cart is Empty
                  </h1>
                ) : (
                  <CartCardContainer />
                )}
              </div>
            </div>
            {items.length > 0 && (
              <div className="bg-amber-800 h-14  text-white rounded-md flex justify-between font-medium p-2 px-4">
                <div className="">
                  <div className="flex align-middle -ml-1">
                    <LiaRupeeSignSolid className="mt-1" />
                    <p>{"189"}</p>
                  </div>
                  <p className="text-sm">{"TOTAL"}</p>
                </div>
                <button className=" ml-20 text-white font-medium ">
                  Proceed to Pay &gt;
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
