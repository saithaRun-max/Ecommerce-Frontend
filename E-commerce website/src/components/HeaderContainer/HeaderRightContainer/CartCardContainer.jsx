import React from 'react'
import CartCard from './CartCard'

const CartCardContainer = () => {
  return (
    <div className='flex flex-col gap-4'>
      <CartCard />
      <CartCard />
      <CartCard />
    </div>
  )
}

export default CartCardContainer
