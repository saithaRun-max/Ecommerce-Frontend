import React from 'react'
import productsData from '../components/productsData'
import { useDispatch} from "react-redux";
import { addProducts } from './productsDataSlice';

const useGetRestaurants = () => {
  const dispatch = useDispatch()
  dispatch(addProducts(productsData));
}

export default useGetRestaurants
