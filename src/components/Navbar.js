import { React, useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItems from "./MenuItems";

const Navbar = ({ currentPage }) => {
  const [show, setShow] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);

  const showMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 120;

    setShow(visible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`${
        show ? "flex" : "hidden"
      } items-center h-[120px] w-full customContainer fixed z-[3] transition-all duration-200 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full xl:text-[32px]  sm:text-[24px]">
        <div>
          <a href="/">
            <img src="/assets/Logo.png" alt="PaddlerNation" />
          </a>
        </div>

        <nav>
          <div className="lg:hidden text-neutral-800 sm:flex">
            <AiOutlineMenu onClick={showMenu} />
          </div>
          <ul className="flex sm:hidden mt-5 lg:flex flex-row items-center md:ml-[320px] sm:text-[24px] xl:text-[28px] 4xl:text-[32px] 2xl:space-x-[120px] text-neutral-800 ">
            <li
              className={
                "hover:bg-bluepb-700/10 p-2 rounded-2xl transition duration-200 ease-in-out" +
                (currentPage === "Om Os" ? " font-bold" : "")
              }
            >
              <a href="/AboutPage">Om os</a>
            </li>
            <li
              className={
                "hover:bg-bluepb-700/10 p-2 rounded-2xl transition duration-200 ease-in-out" +
                (currentPage === "Udlejning" ? " font-bold" : "")
              }
            >
              <a href="/RentingPage">Udlejning</a>
            </li>
            <li
              className={
                "hover:bg-bluepb-700/10 p-2 rounded-2xl transition duration-200 ease-in-out" +
                (currentPage === "TeamBuildings" ? "font-bold" : "")
              }
            >
              <a href="/TeamBuildingPage">Team-Building</a>
            </li>
          </ul>
          <MenuItems showMenu={showMenu} activeMenu={activeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
