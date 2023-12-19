import { gospelData } from "@/utils/data";
import React from "react";
import AccordionSection from "./AccordionSection";

const Accordion = () => {
  return (
    <section className="padding">
      <h1 className="text-center lg:text-[80px] sm:text-[50px] xs:text-[30px] text-[23px] italic font-bold mb-[1rem]">
        What is the Gospel?
      </h1>

      <div className="lg:px-[8rem] md:px-[1rem] px-[0rem]">
        {gospelData.map((item) => (
          <AccordionSection item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Accordion;
