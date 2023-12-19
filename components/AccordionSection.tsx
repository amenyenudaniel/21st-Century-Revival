"use client";
import { AccordionProps } from "@/types";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const AccordionSection = ({ item: { title, content, id } }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 },
  });

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-black w-[100%] slide-bottom">
      <div
        className="flex items-center justify-between cursor-pointer p-4   transition"
        onClick={toggleAccordion}
      >
        <div className="flex items-center sm:gap-[2rem] gap-[0.7rem]">
          <p className="text-black font-bold lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px]">
            {id}.
          </p>
          <h3 className="lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px] text-black italic font-bold">
            {title}
          </h3>
        </div>

        {isOpen ? (
          <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
            <FaMinus />
          </div>
        ) : (
          <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
            <FaPlus />
          </div>
        )}
      </div>
      <animated.div
        style={{ height, opacity }}
        className="overflow-hidden transition-all duration-300 slide-bottom"
      >
        <p className="p-4 text-black lg:text-[25px] sm:text-[20px] text-[16px] mt-[-1rem] mb-[1rem]">
          {content}
        </p>
      </animated.div>
    </div>
  );
};

export default AccordionSection;
