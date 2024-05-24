import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className='col-span-7 flex border rounded-md px-3 shadow-md h-12 ml-20 w-[80%]'>
        <CiSearch className='font-bold text-xl mt-3'/>
      <input className='p-1 px-3 outline-none ' type="text"  placeholder="Search 'curd'" /> 
    </div>
  )
}

export default SearchBar
