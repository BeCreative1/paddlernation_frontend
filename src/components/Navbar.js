import { React, useState, useEffect } from "react";
const Navbar = ({ currentPage }) => {
  const [navScroll, setNavScroll] = useState(true);

  const showNav = () => {
    if (window.scrollY >= 140) {
      setNavScroll(false);
    } else setNavScroll(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", showNav);
    console.log("et");
    return () => window.removeEventListener("scroll", showNav);
  }, []);

  return (
    <header
      className={` ${
        navScroll &&
        "flex items-center h-[120px] w-full customContainer absolute z-[3] "
      }`}
    >
      <div className="flex items-center justify-between w-full  text-[32px]">
        <div>
          <a href="/">
            <img src="/assets/Logo.png" alt="PaddlerNation" />
          </a>
        </div>
        <nav>
          <ul className="flex flex-row items-center md:ml-[320px] space-x-[140px] text-neutral-800 ">
            <li
              className={
                "hover:bg-bluepb-700/10 p-2 rounded-2xl transition duration-200 ease-in-out" +
                (currentPage === "Om Os" ? " font-bold" : "")
              }
            >
              <a href="/">Om os</a>
            </li>
            <li
              className={
                "hover:bg-bluepb-700/10 p-2 rounded-2xl transition duration-200 ease-in-out" +
                (currentPage === "Udlejning" ? " font-bold" : "")
              }
            >
              <a href="Udlejning/">Udlejning</a>
            </li>
            <li
              className={
                "hover:bg-bluepb-700/10 p-2 rounded-2xl transition duration-200 ease-in-out" +
                (currentPage === "TeamBuildings" ? "font-bold" : "")
              }
            >
              <a href="/TeamBuilding">Team-Building</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
