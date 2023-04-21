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
              className=""
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
          <div className="ImageScroll__wrapper flex content-center">
            <div className="ImageScroll__image    ImageScroll__image-1 flex">
              <img
                src="./assets/GallerySectionImages/1.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/2.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/3.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/4.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/5.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/6.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/7.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/8.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/9.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/10.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/11.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/12.jpg"
                className=" mr-[1vw]"
                alt=""
              />
            </div>
          </div>
          <div className="ImageScroll__wrapper">
            <div className="ImageScroll__image    ImageScroll__image-2 flex">
              <img
                src="./assets/GallerySectionImages/1.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/2.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/3.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/4.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/5.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/6.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/7.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/8.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/9.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/10.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/11.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/12.jpg"
                className=" mr-[1vw]"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
