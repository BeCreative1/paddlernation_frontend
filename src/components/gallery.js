import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "node_modules/gsap/ScrollTrigger";

const Gallery = () => {
  const app = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: {
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true, // Reverse the animation at the end
      },
    });

    tl.fromTo(
      ".ImageScroll__image-1",
      { x: "-100vw" },
      { x: 0, duration: 30 },
      0
    );

    tl.fromTo(
      ".ImageScroll__image-2",
      { x: 0 },
      { x: "-100vw", duration: 30 },
      0
    );

    ScrollTrigger.create({
      trigger: "gallery-section",
      start: "top top",
      end: "bottom",
      markers: false,
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        tl.timeScale(velocity / 300);
        tl.timeScale(velocity / 300);
        gsap.to(tl, { timeScale: 1, overwrite: true });
      },
    });
  }, []);

  return (
    <>
      {}
      <div ref={app}>
        <section className="gallery-section">
          <div className="ImageScroll__wrapper hidden content-center mb-10 mt-24 md:flex ">
            <div className="ImageScroll__image    ImageScroll__image-1 flex ">
              <img
                src="./assets/GallerySectionImages/1.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/27.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/3.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/25.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/4.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/24.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/5.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/23.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/2.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/26.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/6.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/22.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/7.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/21.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/8.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/20.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/9.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/19.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/10.jpg"
                className=" mr-[1vw]"
                alt=""
              />

              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/11.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/17.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/12.jpg"
                className=" mr-[1vw]"
                alt=""
              />

              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/13.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/18.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/14.jpg"
                className=" mr-[1vw]"
                alt=""
              />

              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/15.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/16.jpg"
                className=" mr-[1vw]"
                alt=""
              />
            </div>
          </div>
          <div className="ImageScroll__wrapper mt-24 mb-24 md:mt-0">
            <div className="ImageScroll__image ImageScroll__image-2 flex ">
              <img
                src="./assets/GallerySectionImages/1.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw] hidden md:block"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/27.jpg"
                className=" mr-[1vw]"
                alt=""
              />

              <img
                src="./assets/GallerySectionImages/3.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]  hidden md:block"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/25.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/4.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]  hidden md:block"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/24.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/5.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/23.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/2.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/26.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/6.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/22.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]  hidden md:block"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/7.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/21.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/8.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/20.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/9.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/19.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]  hidden md:block"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/10.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/18.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/11.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]  hidden md:block"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]  hidden md:block"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/17.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/12.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]  hidden md:block"
                alt=""
              />

              <img
                src="./assets/GallerySectionImages/13.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]  hidden md:block"
                alt=""
              />

              <img
                src="./assets/GallerySectionImages/14.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]  hidden md:block"
                alt=""
              />

              <img
                src="./assets/GallerySectionImages/15.jpg"
                className=" mr-[1vw]"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/White.jpg"
                className=" mr-[1vw]  hidden md:block"
                alt=""
              />
              <img
                src="./assets/GallerySectionImages/16.jpg"
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
