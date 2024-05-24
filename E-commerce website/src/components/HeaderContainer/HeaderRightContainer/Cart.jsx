import React from 'react';
import { BsCart3 } from "react-icons/bs";

const Cart = () => {
  return (
    <div>
      <button className='bg-amber-700 p-2 py-3 text-white font-bold rounded-md'><BsCart3 className='inline-block text-white mr-2 font-bold' />My Cart</button>
      
    </div>
  )
}

export default Cart
