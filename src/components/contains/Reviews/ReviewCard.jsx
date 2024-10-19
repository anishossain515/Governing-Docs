import React from 'react';
import { cn } from '../../../lib/utilitys/Cn';

export const ReviewCard = ({ image, name, type, active, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "inline-flex justify-normal items-center gap-[3px] border border-primary rounded-[20px] w-[80%] md:w-[400px] lg:w-[491px] px-5 py-[1px] cursor-pointer",
        active && "bg-gradient-primary"
      )}
    >
      
      <img
        src={image}
        alt={name}
        className="w-[68px] h-[68px] rounded-[2px]"
      />

      
      <div className="flex flex-col items-start font-Nunito-Sans font-semibold text-accent">
        <h4 className={cn(active && "text-white")}>
          {name}
        </h4>
        <p className={cn(active && "text-white")}>
          {type}
        </p>
      </div>
    </button>
  );
};