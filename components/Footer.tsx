import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-[1px] bg-black"></div>
      <section className="paddingNav flex items-center justify-between py-5 sm:flex-row flex-col gap-[2rem]">
        <Link href={"/"} className="flex items-center cursor-pointer">
          <img
            src="/logo.jpg"
            alt="logo"
            className="xs:w-[50px] w-[30px] h-[30px] xs:h-[50px]"
          />
          <h2 className="font-bold xs:text-[20px] text-[17px] italic">
            21st Century Revival
          </h2>
        </Link>

        <div className="flex items-center justify-center sm:gap-[1.5rem] gap-[0.8rem] ">
          <Link
            href={"https://www.youtube.com/@21stCenturyRevival"}
            target="_blank"
            className="text-black  text-[1.7rem] cursor-pointer transition hover:scale-[1.09]"
          >
            <TfiYoutube />
          </Link>
          <Link
            href={
              "https://www.instagram.com/21stcenturyrevival?igshid=NGVhN2U2NjQ0Yg=="
            }
            target="_blank"
            className="text-blank text-[1.7rem] cursor-pointer transition hover:scale-[1.09]"
          >
            <FaInstagram />
          </Link>
          <Link
            href={
              "https://www.facebook.com/21stcenturyrevivals?mibextid=vk8aRt"
            }
            target="_blank"
            className="text-black text-[1.7rem] cursor-pointer transition hover:scale-[1.09]"
          >
            <FaFacebook />
          </Link>
          <Link
            href={"https://x.com/CenturyRevival?t=qBO0n3hYqAlebxgsBS9jew&s=09"}
            target="_blank"
            className="text-blank text-[1.7rem] cursor-pointer transition hover:scale-[1.09]"
          >
            <FaXTwitter />
          </Link>
          <Link
            href={
              "https://www.tiktok.com/@21stcenturyrevival?_t=8iJQxlSr9SY&_r=1"
            }
            target="_blank"
            className="text-blank text-[1.7rem] cursor-pointer transition hover:scale-[1.09]"
          >
            <FaTiktok />
          </Link>
        </div>
      </section>

      <p className="text-center pb-[2rem] mt-[2rem] text-[15px]">
        &copy; 2023 All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
