import React from "react";
import PriceOverview from "./PriceOverview";
import RadioChoices from "./RadioChoices";
const Oplysninger = () => {
  return (
    <main>
      <article className="lg:flex  lg:justify-around w-full h-full lg:mx-3 xl:mx-5 max-w-screen-2xl 2xl:mx-auto">
        <div className="flex xxs:justify-center lg:justify-start  xxs:mt-5">
          <div
            className="sm:mt-8 flex 
         xxs:w-[300px] xxs:h-[380px] xs:w-[400px] md:w-[700px] sm:h-[500px] md:h-[620px] lg:w-[600px] xl:w-[720px] 3xl:w-[850px] lg:h-[430px] 
          bg-white  py-12 xxs:py-10  lg:py-14 rounded-2xl sm:w-[600px] 
          shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)]"
          >
            <form
              action="w-full"
              className="w-full lg:grid-cols-2 lg:grid lg:gap-x-[15px] mx-5 xxs:mx-0"
            >
              <div class="justify-center items-center flex">
                <input
                  required
                  className=" sm:w-[95%] lg:w-[250px] lg:h-[70px] xl:w-[300px] 3xl:w-[350px] xs:w-[350px] md:h-[80px] sm:h-[60px] lg:text-sm md:text-lg xl:text-base 3xl:text-lg bg-white text-gray-700 border shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] px-10 mb-3 rounded-2xl focus:bg-white"
                  type="text"
                  placeholder="Navn"
                />
              </div>

              <div class="justify-center items-center flex">
                <input
                  className="sm:w-[95%] lg:w-[250px] lg:h-[70px] 3xl:w-[350px] xl:w-[280px] md:h-[80px] xs:w-[350px]  sm:h-[60px] lg:text-sm md:text-lg  xl:text-base 3xl:text-lg bg-white text-gray-700 border shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] px-10 mb-3 rounded-2xl focus:bg-white"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div class="justify-center items-center flex">
                <input
                  className="sm:w-[95%] lg:w-[250px] lg:h-[70px] 3xl:w-[350px] xl:w-[280px] md:h-[80px] xs:w-[350px]  sm:h-[60px] lg:text-sm md:text-lg  xl:text-base 3xl:text-lg bg-white text-gray-700 border shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] px-10 mb-3 rounded-2xl focus:bg-white"
                  type="tel"
                  placeholder="+45 "
                  required
                />
              </div>

              <div class="justify-center items-center flex">
                <input
                  className="sm:w-[95%] lg:w-[250px] lg:h-[70px] 3xl:w-[350px] xl:w-[280px] md:h-[80px] xs:w-[350px]   sm:h-[60px] lg:text-sm md:text-lg  xl:text-base 3xl:text-lg bg-white text-gray-700 border shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] px-10 mb-3 rounded-2xl focus:bg-white"
                  type="tel"
                  placeholder="CVR"
                />
              </div>

              <div class="justify-center items-center flex">
                <input
                  className="sm:w-[95%] lg:w-[250px] lg:h-[70px] 3xl:w-[350px] xl:w-[280px] md:h-[80px] xs:w-[350px]  sm:h-[60px] lg:text-sm md:text-lg  xl:text-base 3xl:text-lg bg-white text-gray-700 border shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] px-10 mb-3 rounded-2xl focus:bg-white"
                  type="text"
                  placeholder="Adresse"
                />
              </div>

              <div class="justify-center items-center flex ">
                <input
                  className="sm:w-[95%] lg:w-[250px] lg:h-[70px] 3xl:w-[350px] xl:w-[280px] md:h-[80px] xs:w-[350px] sm:h-[60px] lg:text-sm md:text-lg  xl:text-base 3xl:text-lg bg-white text-gray-700 border shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] px-10 mb-3 rounded-2xl focus:bg-white"
                  type="text"
                  placeholder="Postnummer"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="sm:mt-10 lg:mt-0 max-w-screen-2xl xl:mx-auto ">
          <section className="lg:flex md:mr-5 ">
            <div
              className={`flex flex-col justify-start items-center 
              mlg:backdrop-blur-sm  mt-4 pt-4 pb-2 sticky rounded-2xl`}
            >
              <PriceOverview />
            </div>
          </section>

          <section className="lg:flex lg:justify-center lg:items-center lg:mb-20 xxs:hidden lg:active  ">
            <button
              className="bg-bluepb-800 md:px-12 px-6 py-4 font-bold text-neutral-100
              tracking-wider sm:text-[16px] text-[14px] lg:text-[18px]
               flex justify-center items-center rounded-lg mt-12"
            >
              Betaling
            </button>
          </section>
        </div>
      </article>

      <section className="lg:mb-10  lg:relative xxs:z-0 max-w-screen-2xl  lg:mx-auto">
        <form className=" lg:backdrop-blur-sm w-full flex justify-start lg:mb-10 xxs:mt-5">
          <fieldset className="lg:w-[60%] w-[100%] lg:mb-10 xxs:flex xxs:flex-col xxs:items-center ">
            <legend className="text-center font-semibold xxs:text-[32px] text-[24px] text-bluepb-900 mb-4">
              Betaling
            </legend>
            <div
              className="justify-evenly xxs:flex xxs:flex-col xxs:ml-5 md:ml-0 md:flex-row md:items-center md:w-full md:gap-5
             xxs:w-[280px] xxs:justify-center relative"
            >
              <RadioChoices
                title="Mobile Pay"
                styles="w-[250px]"
                name="Mobile Pay"
              ></RadioChoices>
              <div className="xxs:absolute md:bottom-[35%] md:right-[54%] xxs:bottom-[67%] xxs:right-[18%] 3xl:right-[53.5%] lg:right-[54.5%] 4xl:right-[52%] xxs:z-10 ">
                <img
                  src="/assets/MobilePayIcon.png"
                  className="w-[30px] h-[30px] 
                      lg:right-[75%] 2xl:right-[76.5%] 3xl:right-[77.5%]"
                  alt="MobilePayIcon"
                />
              </div>
              <RadioChoices
                title="Betalingskort"
                styles="w-[250px]"
                name="Betalingskort"
              />
            </div>
          </fieldset>
        </form>
      </section>
      <section className="flex justify-center items-center mb-20 xxs:active lg:hidden ">
        <button
          className="bg-bluepb-800 md:px-12 px-6 py-4 font-bold
         text-neutral-100  tracking-wider sm:text-[16px] text-[14px] 
         lg:text-[18px] flex justify-center items-center rounded-lg mt-12"
        >
          Betaling
        </button>
      </section>
    </main>
  );
};

export default Oplysninger;
