import React from 'react';
import { Navbar, PaddleBoardDeal, Footer, RentProcess } from '../components';

const RentingPage = () => {
  return (
    <div className='flex flex-col w-full bg-waves'>
    {/* <Navbar currentPage="Udlejning"/> */}
    <RentProcess />
    <PaddleBoardDeal />
    {/* <Footer /> */}
    </div>
  )
}

export default RentingPage