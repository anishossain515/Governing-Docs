import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import List from "../../lib/utilitys/Data.json";

export const Footer = () => {
  return (
    <footer className="lg:mt-[94px] md:mt-[80px] mt-[60px]">
      <Container>
        <div className="flex justify-between items-center ">
          <Logo className='text-base sm:text-2xl'>Ai GoverningDocs</Logo>

          <div className="space-x-4 hidden lg:block">
            {List.NavItems.map(({ label, link },index) => (
              <a
                href={link}
                key={index}
                className=" hover:text-primary transition-colors duration-150 hover:underline text-accent"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-[1.5px] sm:gap-2.5">
            {
                List.Icons.map(({icon,url,name},index)=>(
                    <a href={url} key={index}><img src={icon} alt={name} /></a>
                ))
            }
          </div>
        </div>



        <div className="md:mt-[90px] mt-[70px] lg:mt-[106px]">
            <div className="border footer-border"></div>
            <h1 className="font-Nunito-Sans pt-5 font-semibold text-[14px] sm:text-[18px] text-center text-[#111111] ">Ai GoverningDocs 2024. All Rights Reserved.</h1>
        </div>
      </Container>
    </footer>
  );
};
