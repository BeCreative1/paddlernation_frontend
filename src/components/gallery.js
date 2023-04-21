import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Gallery = () => {
  const app = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".square", { rotate: 360, duration: 5 });
    }, app);

    return () => ctx.revert();
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
        <div className="square">Hello World</div>
      </div>
    </>
  );
};

export default Gallery;
