import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MenuItems = ({ showMenu, activeMenu, currentPage }) => {
  return (
    <ul
      className={
        activeMenu
          ? "flex-col ml-10 flex items-center cursor-pointer backdrop-blur-sm fixed top-0 sm:bottom-1/3 right-0 sm:left-1/4 md:left-1/2 uppercase  gap-8 justify-start p-8 z-auto"
          : " hidden"
      }
    >
      <AiOutlineClose
        onClick={showMenu}
        className="absolute text-neutral-100 top-[80px] right-[60px] w-10 h-10"
      />
      <li
        className={
          "mt-40 text-neutral-100 hover:bg-neutral-600/20 text-3xl " +
          (currentPage === "Om Os" ? " font-bold" : "")
        }
      >
        <a href="/">Om os</a>
      </li>
      <li
        className={
          "text-neutral-100 hover:bg-neutral-600/20 text-3xl " +
          (currentPage === "Udlejning" ? " font-bold" : "")
        }
      >
        <a href="/Udlejning">Udlejning</a>
      </li>
      <li
        className={
          "text-neutral-100 hover:bg-neutral-600/20 text-3xl" +
          (currentPage === "TeamBuildingPage" ? "font-bold" : "")
        }
      >
        <a href="/TeamBuildingPage">Team-Building</a>
      </li>
    </ul>
  );
};
export default MenuItems;
