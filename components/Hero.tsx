import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="hero flex  justify-center px-2">
      <div className="md:mt-[10rem] sm:mt-[8rem] mt-[6rem]">
        <h1 className="text-white font-bold md:text-[130px] sm:text-[80px] text-[50px] text-center leading-[1]">
          Soli Deo Gloria
        </h1>
        <p className="md:text-[50px] sm:text-[25px] text-[18px] italic font-bold text-white text-center">
          Glory to God Alone
        </p>

        <div className="md:mt-[10rem] sm:mt-[8rem] mt-[6rem] px-[2rem]">
          <p className="text-center text-white italic sm:text-[20px] text-[18px] mb-[1rem] ">
            He made Him who knew no sin to be sin on our behalf, so that we
            might become the righteousness of God in Him.
          </p>
          <p className="text-center text-white italic sm:text-[20px] text-[18px]">
            2 Corinthians 5:21
          </p>
        </div>
        <div>
          <p className="text-white text-center sm:mt-[10rem] mt-[15rem] text-[20px] font-bold italic">
            follow us
          </p>
          <div className="flex items-center justify-center sm:gap-[2rem] gap-[0.8rem] mt-[1rem]">
            <Link
              href={"https://www.youtube.com/@21stCenturyRevival"}
              target="_blank"
              className="text-white sm:text-[2.5rem] text-[1.8rem] cursor-pointer transition hover:scale-[1.09]"
            >
              <TfiYoutube />
            </Link>
            <Link
              href={""}
              target="_blank"
              className="text-white sm:text-[2.5rem] text-[1.8rem] cursor-pointer transition hover:scale-[1.09]"
            >
              <FaInstagram />
            </Link>
            <Link
              href={""}
              target="_blank"
              className="text-white sm:text-[2.5rem] text-[1.8rem] cursor-pointer transition hover:scale-[1.09]"
            >
              <FaFacebook />
            </Link>
            <Link
              href={""}
              target="_blank"
              className="text-white sm:text-[2.5rem] text-[1.8rem] cursor-pointer transition hover:scale-[1.09]"
            >
              <FaXTwitter />
            </Link>
            <Link
              href={""}
              target="_blank"
              className="text-white sm:text-[2.5rem] text-[1.8rem] cursor-pointer transition hover:scale-[1.09]"
            >
              <FaTiktok />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
