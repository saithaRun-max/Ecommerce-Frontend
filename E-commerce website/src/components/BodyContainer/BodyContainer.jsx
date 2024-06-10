import React from 'react'
import BannerContainer from './BannerContainer/BannerContainer'
import SliderFlowContainer from './SideFlowContainer/SliderFlowContainer'
import useGetRestaurants from '../../utils/useGetRestaurants'
useGetRestaurants


const BodyContainer = () => {
  useGetRestaurants()

  return (
    <div className='mx-20'>
      <BannerContainer />
      <SliderFlowContainer />
   
    </div>
  )
}

export default BodyContainer
