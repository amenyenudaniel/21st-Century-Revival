"use client";
import { useState } from "react";
import { animated } from "react-spring";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const AccordionSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleAccordion5 = () => {
    setIsOpen5(!isOpen5);
  };

  const toggleAccordion6 = () => {
    setIsOpen6(!isOpen6);
  };
  const toggleAccordion7 = () => {
    setIsOpen7(!isOpen7);
  };

  const toggleAccordion8 = () => {
    setIsOpen8(!isOpen8);
  };
  const toggleAccordion9 = () => {
    setIsOpen9(!isOpen9);
  };
  return (
    <>
      <div className="border-b border-black w-[100%] slide-bottom">
        <div
          className="flex items-center justify-between cursor-pointer p-4   transition"
          onClick={toggleAccordion}
        >
          <div className="flex items-center sm:gap-[2rem] gap-[0.7rem]">
            <p className="text-black font-bold lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px]">
              1.
            </p>
            <h3 className="lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px] text-black italic font-bold">
              The Holiness of God
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
        {isOpen && (
          <animated.div className="overflow-hidden transition-all duration-300 slide-bottom">
            <p className="p-4 text-black lg:text-[25px] sm:text-[20px] text-[16px] mt-[-1rem] mb-[1rem]">
              The gospel begins with a recognition of the holiness of God. The
              Old Testament Law, a reflection of God's perfect holiness, sets a
              standard that reveals our inability to meet it. God's holiness
              demands righteousness, and any falling short of this standard is
              considered sin <span className="red">(Romans 3:23)</span>. The
              gospel unveils the divine response to this dilemma, showing that
              God's holiness is not compromised but satisfied through the
              sacrificial atonement provided by Jesus Christ.
            </p>
          </animated.div>
        )}
      </div>
      <div className="border-b border-black w-[100%] slide-bottom">
        <div
          className="flex items-center justify-between cursor-pointer p-4   transition"
          onClick={toggleAccordion1}
        >
          <div className="flex items-center sm:gap-[2rem] gap-[0.7rem]">
            <p className="text-black font-bold lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px]">
              2.
            </p>
            <h3 className="lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px] text-black italic font-bold">
              The Justice of God
            </h3>
          </div>

          {isOpen1 ? (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaMinus />
            </div>
          ) : (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaPlus />
            </div>
          )}
        </div>
        {isOpen1 && (
          <animated.div className="overflow-hidden transition-all duration-300 slide-bottom">
            <p className="p-4 text-black lg:text-[25px] sm:text-[20px] text-[16px] mt-[-1rem] mb-[1rem]">
              In light of God's holiness, His justice requires that sin be
              addressed and punished. The gospel reveals God's justice in that
              the penalty for sin is death{" "}
              <span className="red">(Romans 6:23)</span>. Yet, instead of
              leaving humanity condemned, God's justice is fulfilled through the
              substitutionary death of Jesus on the cross. The justice of God is
              maintained as Christ bears the punishment that our sins deserve,
              offering a way for mercy and grace to coexist with divine justice.
            </p>
          </animated.div>
        )}
      </div>
      <div className="border-b border-black w-[100%] slide-bottom">
        <div
          className="flex items-center justify-between cursor-pointer p-4   transition"
          onClick={toggleAccordion2}
        >
          <div className="flex items-center sm:gap-[2rem] gap-[0.7rem]">
            <p className="text-black font-bold lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px]">
              3.
            </p>
            <h3 className="lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px] text-black italic font-bold">
              The Depravity and Condemnation of Man
            </h3>
          </div>

          {isOpen2 ? (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaMinus />
            </div>
          ) : (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaPlus />
            </div>
          )}
        </div>
        {isOpen2 && (
          <animated.div className="overflow-hidden transition-all duration-300 slide-bottom">
            <p className="p-4 text-black lg:text-[25px] sm:text-[20px] text-[16px] mt-[-1rem] mb-[1rem]">
              The gospel confronts the reality of human depravity and the
              resulting condemnation. All have sinned and fall short of God's
              glory, leading to separation from Him{" "}
              <span className="red">(Romans 3:23, John 3:17–18)</span>. The
              gospel exposes the desperate condition of humanity, highlighting
              the need for salvation and the inability of individuals to save
              themselves through their own efforts.
            </p>
          </animated.div>
        )}
      </div>
      <div className="border-b border-black w-[100%] slide-bottom">
        <div
          className="flex items-center justify-between cursor-pointer p-4   transition"
          onClick={toggleAccordion3}
        >
          <div className="flex items-center sm:gap-[2rem] gap-[0.7rem]">
            <p className="text-black font-bold lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px]">
              4.
            </p>
            <h3 className="lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px] text-black italic font-bold">
              The Great Dilemma
            </h3>
          </div>

          {isOpen3 ? (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaMinus />
            </div>
          ) : (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaPlus />
            </div>
          )}
        </div>
        {isOpen3 && (
          <animated.div className="overflow-hidden transition-all duration-300 slide-bottom">
            <p className="p-4 text-black lg:text-[25px] sm:text-[20px] text-[16px] mt-[-1rem] mb-[1rem]">
              Humanity faces a great dilemma: the righteous requirements of
              God's law demand perfection, yet all have sinned and fall short.
              The gospel presents this dilemma and offers a divine solution—the
              redemptive work of Jesus Christ. The cross becomes the bridge
              between God's righteousness and human imperfection, resolving the
              great dilemma through the sacrificial death of the Son of God.
            </p>
          </animated.div>
        )}
      </div>

      <div className="border-b border-black w-[100%] slide-bottom">
        <div
          className="flex items-center justify-between cursor-pointer p-4   transition"
          onClick={toggleAccordion4}
        >
          <div className="flex items-center sm:gap-[2rem] gap-[0.7rem]">
            <p className="text-black font-bold lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px]">
              5.
            </p>
            <h3 className="lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px] text-black italic font-bold">
              God is Love
            </h3>
          </div>

          {isOpen4 ? (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaMinus />
            </div>
          ) : (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaPlus />
            </div>
          )}
        </div>
        {isOpen4 && (
          <animated.div className="overflow-hidden transition-all duration-300 slide-bottom">
            <p className="p-4 text-black lg:text-[25px] sm:text-[20px] text-[16px] mt-[-1rem] mb-[1rem]">
              Central to the gospel is the profound truth that God is love{" "}
              <span className="red">(1 John 4:8)</span>. Despite humanity's
              rebellion and sin, God's love initiates the plan of salvation. The
              gospel is the manifestation of God's love, as He sends His Son to
              die for the sins of the world (John 3:16). Love becomes the
              driving force behind the redemptive work of God in Christ.
            </p>
          </animated.div>
        )}
      </div>

      <div className="border-b border-black w-[100%] slide-bottom">
        <div
          className="flex items-center justify-between cursor-pointer p-4   transition"
          onClick={toggleAccordion5}
        >
          <div className="flex items-center sm:gap-[2rem] gap-[0.7rem]">
            <p className="text-black font-bold lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px]">
              6.
            </p>
            <h3 className="lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px] text-black italic font-bold">
              The Cross of Christ
            </h3>
          </div>

          {isOpen5 ? (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaMinus />
            </div>
          ) : (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaPlus />
            </div>
          )}
        </div>
        {isOpen5 && (
          <animated.div className="overflow-hidden transition-all duration-300 slide-bottom">
            <p className="p-4 text-black lg:text-[25px] sm:text-[20px] text-[16px] mt-[-1rem] mb-[1rem]">
              The pinnacle of the gospel is the cross of Christ. Jesus, the
              sinless Lamb of God, willingly takes upon Himself the sins of
              humanity, becoming the perfect sacrifice that satisfies the
              demands of God's justice{" "}
              <span className="red">(Romans 8:3–4, Hebrews 9:22)</span>. At the
              cross, the depth of God's love and the severity of His justice
              converge, providing salvation for all who believe.
            </p>
          </animated.div>
        )}
      </div>

      <div className="border-b border-black w-[100%] slide-bottom">
        <div
          className="flex items-center justify-between cursor-pointer p-4   transition"
          onClick={toggleAccordion6}
        >
          <div className="flex items-center sm:gap-[2rem] gap-[0.7rem]">
            <p className="text-black font-bold lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px]">
              7.
            </p>
            <h3 className="lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px] text-black italic font-bold">
              The Resurrection
            </h3>
          </div>

          {isOpen6 ? (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaMinus />
            </div>
          ) : (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaPlus />
            </div>
          )}
        </div>
        {isOpen6 && (
          <animated.div className="overflow-hidden transition-all duration-300 slide-bottom">
            <p className="p-4 text-black lg:text-[25px] sm:text-[20px] text-[16px] mt-[-1rem] mb-[1rem]">
              The gospel is incomplete without the resurrection of Jesus. It is
              the triumph over sin and death, validating the redemptive work
              accomplished on the cross{" "}
              <span className="red">(Romans 4:25, 1 Corinthians 15:3–6)</span>.
              The resurrection not only assures believers of their own future
              resurrection but also declares Jesus as the living Savior who
              conquered the grave.
            </p>
          </animated.div>
        )}
      </div>
      <div className="border-b border-black w-[100%] slide-bottom">
        <div
          className="flex items-center justify-between cursor-pointer p-4   transition"
          onClick={toggleAccordion7}
        >
          <div className="flex items-center sm:gap-[2rem] gap-[0.7rem]">
            <p className="text-black font-bold lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px]">
              8.
            </p>
            <h3 className="lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px] text-black italic font-bold">
              Man’s Response
            </h3>
          </div>

          {isOpen7 ? (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaMinus />
            </div>
          ) : (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaPlus />
            </div>
          )}
        </div>
        {isOpen7 && (
          <animated.div className="overflow-hidden transition-all duration-300 slide-bottom">
            <p className="p-4 text-black lg:text-[25px] sm:text-[20px] text-[16px] mt-[-1rem] mb-[1rem]">
              The gospel demands a response from humanity. In light of God's
              love, justice, and the redemptive work of Christ, individuals are
              called to respond in faith. Faith is the means by which the gift
              of salvation is received{" "}
              <span className="red">(Ephesians 2:8–9)</span>. Repentance and
              belief in Jesus Christ as Lord and Savior are central to the
              response required by the gospel{" "}
              <span className="red">(Acts 20:21)</span>. Through faith,
              individuals are reconciled to God, adopted into His family, and
              receive the assurance of eternal life{" "}
              <span className="red">(Romans 10:9–10)</span>. The gospel, while a
              divine proclamation, invites a personal response from each
              individual.
            </p>
          </animated.div>
        )}
      </div>
      <div className="border-b border-black w-[100%] slide-bottom">
        <div
          className="flex items-center justify-between cursor-pointer p-4   transition"
          onClick={toggleAccordion8}
        >
          <div className="flex items-center sm:gap-[2rem] gap-[0.7rem]">
            <p className="text-black font-bold lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px]">
              9.
            </p>
            <h3 className="lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px] text-black italic font-bold">
              Assurance of Salvation
            </h3>
          </div>

          {isOpen8 ? (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaMinus />
            </div>
          ) : (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaPlus />
            </div>
          )}
        </div>
        {isOpen8 && (
          <animated.div className="overflow-hidden transition-all duration-300 slide-bottom">
            <p className="p-4 text-black lg:text-[25px] sm:text-[20px] text-[16px] mt-[-1rem] mb-[1rem]">
              The gospel not only proclaims salvation but also assures believers
              of their standing before God. Those who respond in faith to the
              gospel receive the assurance that they are justified and
              reconciled with God. The Holy Spirit, given to believers, serves
              as a seal guaranteeing their redemption and guiding them in the
              journey of sanctification{" "}
              <span className="red">(Ephesians 1:13–14, Romans 8:16)</span>. The
              assurance of salvation provides confidence and security in the
              believer's relationship with God.
            </p>
          </animated.div>
        )}
      </div>

      <div className="border-b border-black w-[100%] slide-bottom">
        <div
          className="flex items-center justify-between cursor-pointer p-4   transition"
          onClick={toggleAccordion9}
        >
          <div className="flex items-center sm:gap-[2rem] gap-[0.7rem]">
            <p className="text-black font-bold lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px]">
              10.
            </p>
            <h3 className="lg:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px] text-black italic font-bold">
              Rejecting the Gospel
            </h3>
          </div>

          {isOpen9 ? (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaMinus />
            </div>
          ) : (
            <div className="sm:text-[1rem] xs:text-[0.8rem] text-[0.5rem] text-black cursor-pointer">
              <FaPlus />
            </div>
          )}
        </div>
        {isOpen9 && (
          <animated.div className="overflow-hidden transition-all duration-300 slide-bottom">
            <p className="p-4 text-black lg:text-[25px] sm:text-[20px] text-[16px] mt-[-1rem] mb-[1rem]">
              While the gospel is an offer of salvation, it also presents the
              sober reality of rejection. Individuals accept or reject the good
              news of Jesus Christ. Rejecting the gospel is to remain in a state
              of separation from God and facing the consequences of sin.
              Scripture warns that those who do not believe in the name of God’s
              Son are already condemned <span className="red">(John 3:18)</span>
              . The rejection of the gospel results in spiritual darkness and
              eternal separation from the presence of God{" "}
              <span>(2 Thessalonians 1:8–9)</span>.
            </p>
          </animated.div>
        )}
      </div>
    </>
  );
};

export default AccordionSection;
