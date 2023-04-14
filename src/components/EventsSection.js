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
          <h3 className="text-[2.8rem] py-10 text-neutral-50">Team-building</h3>
        </div>

        <div className="hidden sm:flex justify-items-center w-full  min-h-72 px-5">
          <div className="w-1/5 overflow-hidden img-wrapper">
            <img
              src="./assets/EventsSectionImages/Competition.png"
              className="transition duration-500 ease-in-out hover:scale-125 inner-img"
              alt=""
            />
          </div>

          <div className="w-1/5 overflow-hidden img-wrapper">
            <img
              src="./assets/EventsSectionImages/Trip.png"
              className="transition duration-500 ease-in-out hover:scale-125 inner-img"
              alt=""
            />
          </div>
          <div className="w-1/5 overflow-hidden img-wrapper">
            <img
              src="./assets/EventsSectionImages/PaddlePolo.png"
              className="transition duration-500 ease-in-out hover:scale-125 inner-img"
              alt=""
            />
          </div>
          <div className="w-1/5 overflow-hidden img-wrapper">
            <img
              src="./assets/EventsSectionImages/BeachParty.png"
              className="transition duration-500 ease-in-out hover:scale-125 inner-img"
              alt=""
            />
          </div>
          <div className="w-1/5 overflow-hidden img-wrapper">
            <img
              src="./assets/EventsSectionImages/PoloIndoors.png"
              className="transition duration-500 ease-in-out hover:scale-125 inner-img"
              alt=""
            />
          </div>
        </div>

        {/* aaaaaa */}
        <div className="w-[80%]  h-[130vw] ml-[11vw] sm:w-[100%] sm:hidden  h-[113vw] sm:h-[115vw] xl:h-80 2xl:h-96 ">
          <Carousel>
            <img
              src="./assets/EventsSectionImages/Competition.png"
              alt="..."
              className=""
            />
            <img
              src="./assets/EventsSectionImages/Trip.png"
              alt="..."
              className=""
            />
            <img
              src="./assets/EventsSectionImages/PaddlePolo.png"
              alt="..."
              className=""
            />
            <img
              src="./assets/EventsSectionImages/BeachParty.png"
              alt="..."
              className=""
            />
            <img
              src="./assets/EventsSectionImages/PoloIndoors.png"
              alt="..."
              className=""
            />
          </Carousel>
        </div>
        {/* aaaaaaaaaaaa */}
        <div className="flex justify-center mb-[11vw] mt-[2vw] sm:my-[5vw]">
          <button className="bg-neutral-800 text-neutral-100 px-[15%] py-[2.1%] text-xl font-semibold rounded-[5px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.4) ] sm:px-[5%] sm:py-[0.7%]  hover:bg-neutral-300 ease-in duration-200">
            Find ud mere af
          </button>
        </div>
      </div>

      {/*  */}
    </>
  );
};

export default EventSection;
