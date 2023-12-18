"use client";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <nav>
      <div className="flex items-center justify-between gap-[1rem] paddingNav py-2">
        <div className="flex items-center cursor-pointer">
          <img
            src="/logo.jpg"
            alt="logo"
            className="xs:w-[50px] w-[30px] h-[30px] xs:h-[50px]"
          />
          <h2 className="font-bold xs:text-[20px] text-[17px] italic">
            21st Century Revival
          </h2>
        </div>
        <div className="hidden items-center gap-[1.5rem] sm:flex">
          <a
            href="#about"
            className="italic font-medium text-[19px] transition  hover:text-[22px]"
          >
            About
          </a>
          <a
            href="#contact"
            className="italic font-medium text-[19px] transition hover:text-[22px]"
          >
            Contact
          </a>
          <a
            href="#donate"
            className="italic font-medium text-[19px] transition hover:text-[22px]"
          >
            Donate
          </a>
        </div>

        <div
          className="text-[2rem] cursor-pointer transition flex sm:hidden"
          onClick={() => setMenu((prev) => !prev)}
        >
          <RiMenu3Line />
        </div>
      </div>
      {menu && (
        <div className="flex items-center flex-col justify-center w-[200px] gap-[1rem] absolute top-[70px] right-[10px] z-[100] flex sm:hidden">
          <a
            href="#about"
            onClick={() => setMenu(false)}
            className="italic font-medium text-[19px] transition  hover:text-[22px]"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMenu(false)}
            className="italic font-medium text-[19px] transition hover:text-[22px]"
          >
            Contact
          </a>
          <a
            href="#donate"
            onClick={() => setMenu(false)}
            className="italic font-medium text-[19px] transition hover:text-[22px]"
          >
            Donate
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
