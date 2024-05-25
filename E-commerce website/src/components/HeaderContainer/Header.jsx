import React from 'react';
import HeaderLeftContainer from './HeaderLeftContainer/HeaderLeftContainer';
import SearchBar from './SearchContainer/SearchBar';
import HeaderRightContainer from './HeaderRightContainer/HeaderRightContainer';

const Header = () => {
  return (
    <div className='grid grid-cols-12 mx-5 my-3'>
      <HeaderLeftContainer />
      <SearchBar />
      <HeaderRightContainer />
    </div>
  )
}

export default Header
