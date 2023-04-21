import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "node_modules/gsap/ScrollTrigger";

const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);
  const app = useRef();
  useEffect(() => {
    var tl = gsap.timeline({
      defaults: {
        ease: "linear",
        repeat: -1,
      },
    });

    tl.fromTo(
      ".ImageScroll__image-1",
      { x: "-100vw" },
      {
        x: 0,
        duration: 10,
      },
      0
    );

    tl.fromTo(
      ".ImageScroll__image-2",
      { x: 0 },
      {
        x: "-100vw",
        duration: 10,
      },
      0
    );

    tl.fromTo(
      ".ImageScroll__image-3",
      { x: "-100vw" },
      {
        x: 0,
        duration: 10,
      },
      0
    );

    ScrollTrigger.create({
      trigger: "section",
      start: "top top",
      end: "bottom",
      markers: true,
      onEnter: () => {
        tl.play();
      },
      onLeave: () => {
        tl.pause();
      },
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        tl.timeScale(velocity / 100);
        tl.timeScale(velocity / 100);
        gsap.to(tl, { timeScale: 1, overwrite: true });
      },
    });
  }, []);
  return (
    <>
      {/* <div className="bg-neutral-50 h-[50vw] flex items-center">
        <div className="">
          <div className="flex">
            <img
              src="./assets/GallerySectionImages/1.jpg"
              className="w-[15%]"
              alt=""
            />
            <img
              src="./assets/GallerySectionImages/2.jpg"
              className="w-[15%]"
              alt=""
            />
            <img
              src="./assets/GallerySectionImages/2.jpg"
              className="w-[15%]"
              alt=""
            />
            <img
              src="./assets/GallerySectionImages/2.jpg"
              className="w-[15%]"
              alt=""
            />
            <img
              src="./assets/GallerySectionImages/2.jpg"
              className="w-[15%]"
              alt=""
            />
            <img
              src="./assets/GallerySectionImages/2.jpg"
              className="w-[15%]"
              alt=""
            />
            <img
              src="./assets/GallerySectionImages/2.jpg"
              className="w-[15%]"
              alt=""
            />
          </div>

          <div className="flex">
            <img
              src="./assets/GallerySectionImages/1.jpg"
              className="w-[15%]"
              alt=""
            />
            <img
              src="./assets/GallerySectionImages/2.jpg"
              className="w-[15%]"
              alt=""
            />
            <img
              src="./assets/GallerySectionImages/2.jpg"
              className="w-[15%]"
              alt=""
            />
            <img
              src="./assets/GallerySectionImages/2.jpg"
              className="w-[15%]"
              alt=""
            />
            <img
              src="./assets/GallerySectionImages/2.jpg"
              className="w-[15%]"
              alt=""
            />
            <img
              src="./assets/GallerySectionImages/2.jpg"
              className="w-[15%]"
              alt=""
            />
            <img
              src="./assets/GallerySectionImages/2.jpg"
              className="w-[15%]"
              alt=""
            />
          </div>
        </div>
      </div> */}
      <div ref={app}>
        <section>
          <div class="ImageScroll__wrapper">
            <div class="ImageScroll__image    ImageScroll__image-1"></div>
          </div>
          <div class="ImageScroll__wrapper">
            <div class="ImageScroll__image    ImageScroll__image-2"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
