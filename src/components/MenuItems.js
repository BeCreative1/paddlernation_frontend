import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MenuItems = ({ showMenu, activeMenu, currentPage }) => {
  return (
    <ul
      className={
        activeMenu
          ? "flex-col flex items-center fixed top-0 sm:bottom-1/3 right-0 sm:left-1/4 md:left-1/2 uppercase backdrop-blur-md gap-8 justify-start p-8 z-auto"
          : "hidden"
      }
    >
      <AiOutlineClose
        onClick={showMenu}
        className="absolute text-neutral-100 top-10 right-10 w-10 h-10"
      />
      <li
        className={
          "mt-40 text-bluepb-800" +
          (currentPage === "Om Os" ? " font-bold" : "")
        }
      >
        <a href="/">Om os</a>
      </li>
      <li
        className={
          "text-bluepb-800" + (currentPage === "Udlejning" ? " font-bold" : "")
        }
      >
        <a href="/Udlejning">Udlejning</a>
      </li>
      <li
        className={
          "text-bluepb-800" +
          (currentPage === "TeamBuildingPage" ? "font-bold" : "")
        }
      >
        <a href="/TeamBuildingPage">Team-Building</a>
      </li>
    </ul>
  );
};
export default MenuItems;
