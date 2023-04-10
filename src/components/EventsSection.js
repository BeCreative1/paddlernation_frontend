import React from "react";
import { useRef } from "react";
import { Carousel } from "flowbite-react";
// const carousel = new Carousel(items, options);

const EventSection = () => {
  const slidesContainer = useRef();
  const slide = useRef();
  const prevButton = useRef();
  const nextButton = useRef();
  const slideWidth = slide.clientWidth;

  const handleNext = (e) => {
    e.preventDefault();
    slidesContainer.scrollLeft += slideWidth * 2;
    console.log("a");
  };

  const handlePrev = (e) => {
    e.preventDefault();
    slidesContainer.scrollLeft -= slideWidth * 2;
  };

  return (
    <>
      <div className=" bg-[linear-gradient(180deg,_#76B3E3_0%,_#FFFFFF_100%)] font-medium">
        <div className="title-box flex justify-center">
          <h3 className="text-[1.8rem] py-5 text-neutral-50">Team-building</h3>
        </div>

        <div className="hidden sm:flex justify-items-center w-full  min-h-72 px-5">
          <img
            src="./assets/EventsSectionImages/Competition.png"
            alt=""
            className="w-1/5"
          />

          <img
            src="./assets/EventsSectionImages/Trip.png"
            alt=""
            className="w-1/5"
          />
          <img
            src="./assets/EventsSectionImages/PaddlePolo.png"
            alt=""
            className="w-1/5"
          />
          <img
            src="./assets/EventsSectionImages/BeachParty.png"
            alt=""
            className="w-1/5"
          />
          <img
            src="./assets/EventsSectionImages/PoloIndoors.png"
            alt=""
            className="w-1/5"
          />
        </div>

        {/* aaaaaa */}
        <div className="sm:hidden  h-[105vw] sm:h-[105vw] xl:h-80 2xl:h-96">
          <Carousel>
            <img
              src="./assets/EventsSectionImages/Competition.png"
              alt="..."
              className="w-[75%] "
            />
            <img
              src="./assets/EventsSectionImages/Trip.png"
              alt="..."
              className="w-[75%] "
            />
            <img
              src="./assets/EventsSectionImages/PaddlePolo.png"
              alt="..."
              className="w-[75%] "
            />
            <img
              src="./assets/EventsSectionImages/BeachParty.png"
              alt="..."
              className="w-[75%] "
            />
            <img
              src="./assets/EventsSectionImages/PoloIndoors.png"
              alt="..."
              className="w-[75%] "
            />
          </Carousel>
        </div>
        {/* aaaaaaaaaaaa */}
        <div className="flex justify-center mt-6">
          <button className="bg-neutral-800 text-neutral-100 px-[5%] py-[.7%] text- xl font-semibold rounded-[5px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
            Find ud mere af
          </button>
        </div>
      </div>
    </>
  );
};

export default EventSection;
