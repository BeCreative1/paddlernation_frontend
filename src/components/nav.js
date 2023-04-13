import React from "react";

import { RxDoubleArrowDown } from "react-icons/rx";

// implement the link for booking

const Hero = () => {
  return (
    <div className="h-screen">
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
        className="relative t-0 r-0 b-0 z-[2] h-full w-full "
        autoPlay
        loop
      ></video>
    </div>
  );
};

export default Hero;
