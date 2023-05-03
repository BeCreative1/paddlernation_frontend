import React, { use, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Router, { useRouter } from "next/router";

const MenuItems = ({ showMenu, activeMenu, currentPage }) => {
  const router = useRouter();

  return (
    <ul
      className={`${
        activeMenu
          ? "flex-col ml-10 flex items-center cursor-pointer backdrop:blur-lg fixed top-0 sm:bottom-1/3 right-0 sm:left-1/4 md:left-1/2 uppercase  gap-8 justify-start p-8 z-auto"
          : " hidden"
      } 
          lg:hidden`}
    >
      <AiOutlineMenu
        onClick={showMenu}
        className="absolute top-[48px] right-[64px] w-8 h-8 text-neutral-800"
      />
      <li
        className={
          "mt-40 text-neutral-600 hover:bg-neutral-800/20 text-3xl bg-neutral-400/30 " +
          (currentPage === "AboutPage" ? " font-bold" : "")
        }
      >
        <button className="uppercase" onClick={() => router.push("/AboutPage")}>
          Om os
        </button>
      </li>
      <li
        className={
          "text-neutral-600 hover:bg-neutral-800/20 text-3xl bg-neutral-400/30 " +
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
          "text-neutral-600 hover:bg-neutral-800/20 text-3xl bg-neutral-400/30" +
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
