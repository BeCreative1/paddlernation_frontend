import React from "react";
const Navbar = ({ currentPage }) => {
  return (
    <header className="flex items-center h-[120px] customContainer">
      <div className="flex items-center justify-between w-full  text-[32px]">
        <div>
          <a href="/">
            <img src="/assets/Logo.png" alt="PaddlerNation" />
          </a>
        </div>
        <nav>
          <ul className="flex flex-row space-x-[120px] text-neutral-800 ">
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
