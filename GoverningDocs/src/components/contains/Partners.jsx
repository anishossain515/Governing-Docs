import React from "react";
import Container from "../common/Container";
import Heading from "../common/Heading";
import PartnersList from "../../lib/utilitys/Data.json";

export const Partners = () => {
  return (
    <section className="mt-[70px] md:mt-[100px] lg:mt-[150px] bg-[#e6f9fd] px-2.5">
      <Container className="py-[50px] px-[45px]">
        <Heading gradient="Partners" className="text-center text-4xl">
          Our
        </Heading>

        <div className="flex flex-wrap items-center justify-center gap-[30px] pt-10">
          {PartnersList.Partners.map(({ image, name }) => (
            <div className="bg-white w-[274px] h-[101px] rounded-xl border border-[#d6d6d6] flex items-center justify-center ">
              <img src={image} alt={name} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
