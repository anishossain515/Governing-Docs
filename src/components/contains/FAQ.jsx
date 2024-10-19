import React, { useState } from "react";
import Container from "../common/Container";
import Heading from "../common/Heading";
import { Arrow } from "../Icons";
import { cn } from "../../lib/utilitys/Cn";
import QA from "../../lib/utilitys/Data.json";

export const FAQ = () => {
  const [ClickArrow, setClickArrow] = useState(1);

  const handleChange = (i) => {
    setClickArrow(ClickArrow === i ? -1 : i);
  };
  return (
    <section className="mt-[70px] md:mt-[100px] lg:mt-[150px] relative">
      <Container className="max-w-[982px]">
        <Heading gradient="Asked Questions" className="text-center">
          Frequently
        </Heading>

        <div className="pt-10 space-y-5">
          {QA.FAQ.map(({ Que, Ans }, index) => (
            <div
              key={index}
              className=" pt-5 border-2 rounded-[20px] border-primary shadow-FAQ"
            >
              <button
              onClick={()=>handleChange(index)}
              className="inline-flex w-full justify-between items-center pt-1 pb-[23px] px-[30px] ">
                <h3 className="font-bold cursor-pointer text-[15px] md:text-[26px] font-Nunito-Sans text-secondary text-start">
                  {Que}
                </h3>
               
               <Arrow
                  className={cn(
                    "-rotate-90 text-primary w-[43px]",
                    ClickArrow === index && "rotate-90"
                  )}
                />
              </button>
              {ClickArrow === index && (
                <p className="text-accent md:text-base text-sm pb-10 px-[25px] pt-[21px] font-semibold">
                  {Ans}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>

      <img
        src="/faq.png"
        alt="FAQ"
        className="absolute max-w-full w-auto -z-10 h-auto left-0 md:left-[7%] top-[-50px] md:top-[-80px] md:max-w-[80%] lg:max-w-[60%] object-contain "
      />
    </section>
  );
};
