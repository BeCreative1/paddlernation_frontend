import React from "react";

const EventSection = () => {
  return (
    <>
      <div className=" bg-[linear-gradient(180deg,_#76B3E3_0%,_#FFFFFF_100%)]">
        <div className="title-box">
          <h3>Team-building</h3>
        </div>

        <div className="events-box flex w-full px-10">
          <img
            src="./assets/EventsSectionImages/Competition.png"
            alt=""
            class="w-1/5"
          />

          <img
            src="./assets/EventsSectionImages/Trip.png"
            alt=""
            class="w-1/5"
          />
          <img
            src="./assets/EventsSectionImages/PaddlePolo.png"
            alt=""
            class="w-1/5"
          />
          <img
            src="./assets/EventsSectionImages/BeachParty.png"
            alt=""
            class="w-1/5"
          />
          <img
            src="./assets/EventsSectionImages/PoloIndoors.png"
            alt=""
            class="w-1/5"
          />
        </div>
      </div>
    </>
  );
};

export default EventSection;
