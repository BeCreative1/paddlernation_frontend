import React from "react";
import PriceOverview from "./PriceOverview";
import RadioChoices from "./RadioChoices";
const Oplysninger = () => {
  return (
    <main>
      <article className="lg:flex ml-10 lg:justify-around ">
        <div className="flex sm:justify-center lg:justify-start lg:ml-5 ">
          <div
            className="sm:mt-8 flex 
         sm:w-[600px] md:w-[700px] sm:h-[550px] md:h-[750px] lg:w-[800px] lg:h-[450px] 
          bg-white px-20 py-12 rounded-2xl 
          shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)]"
          >
            <form
              action="w-full"
              className="w-full lg:grid-cols-2 lg:grid lg:gap-x-24 "
            >
              <div class="justify-center items-center flex">
                <input
                  required
                  className=" sm:w-full lg:w-[280px]   md:h-[80px] sm:h-[60px] bg-white text-gray-700 border shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] px-10 mb-3 rounded-2xl focus:bg-white"
                  type="text"
                  placeholder="Navn"
                />
              </div>

              <div class="justify-center items-center flex">
                <input
                  className="sm:w-full lg:w-[280px]  md:h-[80px] sm:h-[60px] bg-white text-gray-700 border shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] px-10 mb-3 rounded-2xl focus:bg-white"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div class="justify-center items-center flex">
                <input
                  className="sm:w-full lg:w-[280px]  md:h-[80px] sm:h-[60px] bg-white text-gray-700 border shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] px-10 mb-3 rounded-2xl focus:bg-white"
                  type="tel"
                  placeholder="+45"
                  required
                />
              </div>

              <div class="justify-center items-center flex">
                <input
                  className="sm:w-full lg:w-[280px]  md:h-[80px] sm:h-[60px] bg-white text-gray-700 border shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] px-10 mb-3 rounded-2xl focus:bg-white"
                  type="tel"
                  placeholder="CVR"
                />
              </div>

              <div class="justify-center items-center flex">
                <input
                  className="sm:w-full lg:w-[280px] md:h-[80px] sm:h-[60px] bg-white text-gray-700 border shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] px-10 mb-3 rounded-2xl focus:bg-white"
                  type="text"
                  placeholder="Adresse"
                />
              </div>

              <div class="justify-center items-center flex">
                <input
                  className="sm:w-full lg:w-[280px] md:h-[80px] sm:h-[60px] bg-white text-gray-700 border shadow-[0_5px_25px_-5px_rgba(0,0,0,0.3)] px-10 mb-3 rounded-2xl focus:bg-white"
                  type="text"
                  placeholder="Postnummer"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="sm:mt-40 lg:mt-0">
          <section className="lg:flex lg:mr-10 md:ml-5 ">
            <div
              className={`flex flex-col justify-start items-center mlg:backdrop-blur-sm  mt-4 pt-4 pb-2 sticky rounded-2xl`}
            >
              <PriceOverview />
            </div>
          </section>

          <section className="flex justify-center items-center mb-20">
            <button className="bg-bluepb-800 md:px-12 px-6 py-4 font-bold text-neutral-100  tracking-wider sm:text-[16px] text-[14px] lg:text-[18px] flex justify-center items-center rounded-lg mt-12">
              Betaling
            </button>
          </section>
        </div>
      </article>

      <section className="lg:mb-10  md:top-[92%] md:left-6 sm:w-full sm:absolute sm:top-[73%] sm:left-5 lg:relative">
        <form className="p-4 lg:backdrop-blur-sm w-full flex justify-start lg:mb-10 lg:ml-[26px]">
          <fieldset className="lg:w-[60%] w-[100%] lg:mb-10">
            <legend className="text-center font-semibold sm:text-[32px] text-[24px] text-bluepb-900 mb-4">
              Betaling
            </legend>
            <div className="flex justify-evenly w-full flex-row">
              <div className="flex items-center">
                <RadioChoices
                  title="Mobile Pay"
                  styles="w-[250px]"
                  name="Mobile Pay"
                />
                <img
                  src="/assets/MobilePayIcon.png"
                  className="w-[30px] h-[30px] md:right-[59%] md:top-[100px] sm:absolute sm:right-[57%] sm:top-[102px] lg:right-[75%] 2xl:right-[76.5%]"
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
    </main>
  );
};

export default Oplysninger;
