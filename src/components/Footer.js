import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";

// implement the link for booking

const Footer = () => {
  return (
    <footer className="flex w-full bg-neutral-100 h-[100px] customFooterContainer mx-auto  mt-[auto]  ">
      <div className="flex basis-1/2 flex-row">
        <ul className="grid grid-cols-2  gap-x-[140px] py-[26px] text-[16px] text-neutral-800">
          <li>
            <a
              href="mailto:info@paddlernation.com"
              className="hover:underline flex items-center"
            >
              <IoMailOutline className="relative right-1.5" />
              info@paddlernation.com
            </a>
          </li>
          <li className="hover:underline">Banegårdsgade 2,8700 Horsens</li>
          <li className="hover:underline flex items-center ">
            <BsTelephone className="relative right-1.5" />
            +45 71749917
          </li>
          <li className="hover:underline">CVR: 42454001</li>
        </ul>
      </div>
      <div className="basis-1/2  flex-row flex w-full">
        <div className="flex justify-center items-center basis-1/2 ml-[200px]">
          <a href="/">
            <button className="h-[55px] w-[232px] bg-neutral-800 text-neutral-100  hover:bg-neutral-700 rounded-xl ">
              Booking
            </button>
          </a>
          <div className="flex flex-row basis-1/2 items-center justify-center w-full ">
            <ul className="flex flex-row ml-[20px] ">
              <li className=" ml-[200px]">
                <a href="https://www.instagram.com/paddlernation/">
                  <FaInstagram className="h-[25px] w-[25px]" />
                </a>
              </li>

              <li className=" ml-[20px]">
                <a href="https://www.facebook.com/paddlernation/">
                  <AiOutlineFacebook className="h-[25px] w-[25px]" />
                </a>
              </li>

              <li className="ml-[20px]">
                <a href="https://www.youtube.com/@paddlernation5856/">
                  <FiYoutube className="h-[25px] w-[25px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
