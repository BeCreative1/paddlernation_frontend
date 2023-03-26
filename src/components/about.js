import React from "react";
import Image from 'next/image';
import aboutLogo from '../assets/logoAboutUs.svg'
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <>
      <div className="wrapper flex items-center w-full h-screen bg-stacked-waves bg-cover">
        <AnimationOnScroll animateIn="animate__slideInUp" className="flex justify-center">
        <div className="blurredDiv w-4/5 h-4/5 md:h-3/5  bg-[#B0DAF8] bg-opacity-20 rounded-xl">
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-evenly p-10 backdrop-blur-md">
            <div className="logo w-2/5">
              <Image src={aboutLogo} alt='logo'></Image>
            </div>

            <div className="line md:h-full w-[1px] invisible md:visible bg-black"></div>
            
            <div className="aboutText md:w-2/5 h-full flex items-center">
              <div className="flex h-full flex-col justify-evenly">

                <span className="text-xl 2xl:text-4xl font-bold">Om Os</span>

                <span className="text-xs xl:text-sm 2xl:text-2xl text-neutral-700">
                  Velkommen til Paddler Nation! Vi er den førende udbyder af
                  paddleboard-udlejning og teambuilding-oplevelser i Horsens. Vi
                  tilbyder topkvalitets paddleboards til leje til private og
                  erhvervskunder, der ønsker at udforske de smukke vandveje
                  omkring Horsens.{" "}
                </span>

                <span className="text-xs xl:text-sm 2xl:text-2xl text-neutral-700">
                  Vi er også specialiseret i uforglemmelige
                  teambuilding-arrangementer, der vil hjælpe dit team med at
                  binde, udvikle færdigheder og have det sjovt i det fri. Vores
                  mission er at give dig den bedste oplevelse på vandet med
                  sikkerhed og komfort. Vi er stolte af at tilbyde personlig
                  service og uforglemmelige oplevelser på vandet.{" "}
                </span>

                <span className="text-xs xl:text-sm 2xl:text-2xl text-neutral-700">
                  Vi er bekvemt placeret i Horsens, så du behøver ikke at rejse
                  langt for at starte dit eventyr. Tøv ikke med at kontakte os
                  for at skabe varige minder på vandet!
                </span>
              </div>
            </div>
          </div>
        </div>
        </AnimationOnScroll>
      </div>
    </>
  );
};

export default About;
