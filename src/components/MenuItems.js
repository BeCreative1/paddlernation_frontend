import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Router, { useRouter } from "next/router";

const MenuItems = ({ showMenu, activeMenu, currentPage }) => {
  const router = useRouter();

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
          (currentPage === "AboutPage" ? " font-bold" : "")
        }
      >
        <button className="uppercase" onClick={() => router.push("/AboutPage")}>
          Om os
        </button>
      </li>
      <li
        className={
          "text-neutral-100 hover:bg-neutral-600/20 text-3xl " +
          (currentPage === "RentingPage" ? " font-bold" : "")
        }
      >
        <button
          className="uppercase"
          onClick={() => router.push("/RentingPage")}
        >
          Udlejning
        </button>
      </li>
      <li
        className={
          "text-neutral-100 hover:bg-neutral-600/20 text-3xl" +
          (currentPage === "TeamBuildingPage" ? "font-bold" : "")
        }
      >
        <button
          className="uppercase"
          onClick={() => router.push("/TeamBuildingPage")}
        >
          Team-Building
        </button>
      </li>
    </ul>
  );
};
export default MenuItems;
