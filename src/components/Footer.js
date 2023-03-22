import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";

// implement the link for booking

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-100 h-[100px] customFooterContainer mx-auto fixed bottom-0">
      <div className="w-full flex flex-row">
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
          <li className="hover:underline flex items-center hover:underline ">
            <BsTelephone className="relative right-1.5" />
            +45 71749917
          </li>
          <li className="hover:underline">CVR: 42454001</li>
        </ul>
        <div className="flex justify-center items-center ">
          <a href="/">
            <button className="h-[55px] w-[232px] ml-[400px] bg-neutral-800 text-neutral-100  hover:bg-neutral-700 rounded-xl ">
              Booking
            </button>
          </a>
        </div>
        <div className="flex justify-center items-center flex-row   ">
          <ul className="h-[24px] w-[28px] ml-[250px] ">
            <li>
              <a href="https://www.instagram.com/paddlernation/">
                <FaInstagram />
              </a>
            </li>
          </ul>
          <ul className="h-[24px] w-[28px] ">
            <li>
              <a href="https://www.instagram.com/paddlernation/">
                <AiOutlineFacebook />
              </a>
            </li>
          </ul>
          <ul className="h-[24px] w-[28px] ">
            <li>
              <a href="https://www.instagram.com/paddlernation/">
                <FiYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
