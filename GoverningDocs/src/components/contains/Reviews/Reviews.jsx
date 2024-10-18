import React, { useState } from "react";
import Container from "../../common/Container";
import Heading from "../../common/Heading";
import { ReviewCard } from "./ReviewCard";
import ReviewData from "../../../lib/utilitys/Data.json";
import { Star } from "../../Icons";
import { cn } from "../../../lib/utilitys/Cn";
import { ReviewsLine } from "./ReviewsLine";

export const Reviews = () => {
  const [IsActive, setIsActive] = useState(1);

  const clientReview = ReviewData.Clients[IsActive].review
  return (
    <section className="md:mt-[150px] mt-[100px] bg-[#f6f6f6] text-center w-full">
      <Container className="pt-20 space-y-10">
        <Heading gradient="Our Client" className='text-[25px]'>Reviews From</Heading>

        <div className="flex md:flex-row flex-col justify-between items-center gap-[93px] ">
          <div className="flex  md:w-[516px] gap-2 md:gap-5 ">
             <ReviewsLine Active={IsActive} />


            {/* Clients */}
            <div className="space-y-[15px] flex-grow ">
              {ReviewData.Clients.map((Review, index) => (
                <ReviewCard
                  key={index}
                  active={IsActive === index}
                  onClick={() => setIsActive(index)}
                  {...Review}
                />
              ))}
            </div>
          </div>

          {/* Clients Experiences */}
          <div className="space-y-[30px] lg-w-[575px]  flex flex-col justify-start items-start ">
          <h1 className="text-secondary text-start font-Nunito-Sans font-bold text-[30px]">
              {clientReview.title}
            </h1>
            <div className="flex items-center justify-start gap-[5px] ">
              {Array.from(Array(clientReview.stars).keys()).map((el) => (
                <Star key={el} />
              ))}
            </div>
            <p className="font-Nunito-Sans text-start font-semibold  text-accent">
             {clientReview.details}
            </p>
          </div>
        </div>

        {/* Clients */}
      </Container>
    </section>
  );
};
