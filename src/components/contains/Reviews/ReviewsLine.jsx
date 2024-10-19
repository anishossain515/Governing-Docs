import React from "react";
import { cn } from "../../../lib/utilitys/Cn";

export const ReviewsLine = ({ Active }) => {
  return (
    <div className="bg-[#E2DED8] w-[5px] rounded-[20px]">
      <div className="space-y-[15px]">
        {Array.from(Array(3).keys()).map((el) => (
          <div
            className={cn(
              "w-[5px] h-[80px] rounded-[20pc] bg-transparent",
              Active === el && "bg-gradient-primary"
            )}
            key={el}
          ></div>
        ))}
      </div>
    </div>
  );
};