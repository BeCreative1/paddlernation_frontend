import React from "react";
import { RxDoubleArrowDown } from "react-icons/rx";

const Hero = () => {
  return (
    <div className=" h-screen relative flex items-center justify-center">
      <a href="/">
        <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 h-[55px] w-[232px] absolute rounded-xl z-[1] mt-[530px] ml-[-110px]">
          Booking
        </button>
      </a>
      <div
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2
       z-10 md:bottom-10 md:left-1/2 lg:bottom-16 lg:left-1/2 "
      >
        <a href="/">
          <RxDoubleArrowDown className="w-10 h-10 text-neutral-100" />
        </a>
      </div>
      <video
        src="/assets/heroVideo_v2.mp4"
        type="video/mp4"
        className="h-full w-full object-cover absolute top-0 left-0 -z-1"
        autoPlay
        loop
      ></video>
    </div>
  );
};

export default Hero;
