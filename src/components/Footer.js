import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";

// implement the link for booking

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row bg-neutral-100 md:h-[100px] sm:h-[auto] customFooterContainer  mt-[auto] z-[5]">
      <div className="flex basis-1/2 flex-col sm:flex-row flex-1 justify-center items-center py-4">
        <ul className="grid gap-4 md:gap-x-10 md:grid-cols-2 text-sm md:text-sm text-neutral-800">
          <li>
            <a
              href="mailto:info@paddlernation.com"
              className="hover:underline flex items-center "
            >
              <IoMailOutline className="relative right-1.5" />
              info@paddlernation.com
            </a>
          </li>
          <li className="hover:underline">Banegårdsgade 2,8700 Horsens</li>
          <li className="hover:underline flex items-center">
            <BsTelephone className="relative right-1.5" />
            +45 71749917
          </li>
          <li className="hover:underline">CVR: 42454001</li>
        </ul>
      </div>
      <div className="flex basis-1/2 flex-col sm:flex-row justify-center items-center ml-[100px] xxs:ml-0 py-2 md:basis-1/3 lg:basis-1/2 ">
        <a href="/RentingPage">
          <button
            className="w-52 h-12 bg-neutral-800 text-neutral-100 hover:bg-neutral-700 
          rounded-lg mb-2 xxs:mr-[20px] sm:mr-4 md:mr-0 sm:mb-0
          md:w-44 lg:w-52 2xl:w-54"
          >
            Booking
          </button>
        </a>
        <ul className="flex flex-row justify-center items-center  md:ml-[20px] ">
          <li className="mr-4 md:mr-[10px]">
            <a href="https://www.instagram.com/paddlernation/">
              <FaInstagram className="h-6 w-6" />
            </a>
          </li>
          <li className="mr-4 md:mr-[10px]">
            <a href="https://www.facebook.com/paddlernation/">
              <AiOutlineFacebook className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@paddlernation5856/">
              <FiYoutube className="h-6 w-6" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
