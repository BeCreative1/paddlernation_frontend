import React from "react";
import Navbar from "./Navbar";

import { RxDoubleArrowDown } from "react-icons/rx";

// implement the link for booking

const Hero = () => {
  return (
    <div className="w-full h-full">
      <a href="/">
        <button className="h-[55px] w-[232px] bg-neutral-100 text-neutral-700 absolute right-[43.5%] top-[85%] z-[3] hover:bg-neutral-200 rounded-xl ">
          Booking
        </button>
      </a>
      <div>
        <a href="/">
          <RxDoubleArrowDown className=" w-[55px] h-[40px] text-neutral-100 absolute right-[48.5%] top-[92%] z-[3] "></RxDoubleArrowDown>
        </a>
      </div>
      <video
        src="/assets/heroVideo_v2.mp4"
        type="video/mp4"
        className="relative t-0 r-0 b-0 z-[2] 2xl-w-full 2xl-h-full"
        width="100%"
        height="100%"
        autoPlay
        loop
      ></video>
    </div>
  );
};

export default Hero;
