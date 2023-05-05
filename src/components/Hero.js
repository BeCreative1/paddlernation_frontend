import React from "react";
import { RxDoubleArrowDown } from "react-icons/rx";
import { animateScroll } from "react-scroll";

const Hero = () => {
  const handleScroll = () => {
    animateScroll.scrollTo(window.innerHeight, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className="h-screen relative flex flex-col items-center justify-center">
      <div
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10 sm:bottom-12 md:bottom-10 lg:bottom-16 hover:cursor-pointer"
        onClick={handleScroll}
      >
        <RxDoubleArrowDown className="w-10 h-10 text-neutral-100 " />
      </div>
      <video
        src="/assets/heroVideo_v2.mp4"
        type="video/mp4"
        className="h-full w-full object-cover absolute top-0 left-0 -z-1"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute xs:bottom-[150px] md:bottom-40 lg:bottom-17">
        <a href="/RentingPage">
          <button
            className="bg-neutral-100 hover:bg-neutral-200
           text-neutral-700 h-12 w-48 rounded-xl"
          >
            Booking
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
