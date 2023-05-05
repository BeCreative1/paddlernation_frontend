import { React, useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItems from "./MenuItems";
import Router, { useRouter } from "next/router";

const Navbar = ({ currentPage }) => {
  const router = useRouter();

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
        show ? "" : "hidden "
      } items-center h-[120px] w-full 2xl:w-[100%] 4xl:px-[200px] customContainer 
       fixed z-[3] transition-all duration-200 ease-in-out backdrop-blur-[4px]
        xxs:flex xxs:justify-center xxs:h-[100px] `}
    >
      <div
        className="flex items-center justify-between
        xl:text-[32px] w-full sm:text-[24px] "
      >
        <div
          className="xs:w-80  xxs:h-auto md:h-auto md:w-auto lg:h-auto 
        lg:w-80 xl:w-[500px] 4xl:flex-1 2xl:w-auto xxs:w-auto "
        >
          <a href="/">
            <img src="/assets/Logo.png" alt="PaddlerNation" />
          </a>
        </div>

        <nav>
          <div className="lg:hidden cursor-pointer text-neutral-800 xxs:flex ">
            <AiOutlineMenu
              className={"w-8 h-8 mt-5 xxs:mt-4 xxs:ml-5 "}
              onClick={showMenu}
            />
          </div>
          <ul
            className="flex xxs:hidden xxs:backdrop:blur-none mt-5 lg:flex flex-row items-center 
          lg:space-x-[50px] sm:text-[24px] xl:text-[32px] 2xl:text-[32px] 4xl:text-[38px] 
          2xl:space-x-[120px] text-neutral-900 2xl:ml-[100px] "
          >
            <li
              className={
                "hover:bg-bluepb-700/10 p-2 rounded-2xl transition duration-200 ease-in-out" +
                (currentPage === "AboutPage" ? " font-bold" : "")
              }
            >
              <button onClick={() => router.push("/AboutPage")}>Om os</button>
            </li>
            <li
              className={
                "hover:bg-bluepb-700/10 p-2 rounded-2xl transition duration-200 ease-in-out" +
                (currentPage === "RentingPage" ? " font-bold" : "")
              }
            >
              <button onClick={() => router.push("/RentingPage")}>
                Udlejning
              </button>
            </li>
            <li
              className={
                "hover:bg-bluepb-700/10 p-2 rounded-2xl transition duration-200 ease-in-out" +
                (currentPage === "TeamBuildingPage" ? "font-bold" : "")
              }
            >
              <button onClick={() => router.push("/TeamBuildingPage")}>
                Team-Building
              </button>
            </li>
          </ul>
          <MenuItems showMenu={showMenu} activeMenu={activeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
