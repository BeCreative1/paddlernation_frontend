import React from 'react';
import Stepper from './Stepper.js';

const RentProcess = () => {
  return (
    <div className='flex snap-start snap-always lg:flex-row flex-col justify-center items-center sticky top-0 bg-bluepb-50 shadow-[0_5px_5px_-5px_rgba(0,0,0,0.1)] z-[2] pb-4 sm:pb-0 w-full lg:mt-24 mt-16'>
        <div className='flex justify-center items-center flex-1'>
            <h1 className='flex-1 text-center font-semibold sm:text-[48px] text-[32px] text-bluepb-900 sm:leading-[100px] leading-[75px]'>Udlejning</h1>
        </div>
        <div className='flex flex-row justify-center items-center lg:px-28 px-0 flex-1 lg:flex-none'>
            <Stepper />
        </div>
    </div>
  )
}

export default RentProcess