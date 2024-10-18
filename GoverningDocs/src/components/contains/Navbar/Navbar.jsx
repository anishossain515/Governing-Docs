import React, { useState } from "react";
import Container from "../../common/Container";
import Logo from "../../common/Logo";
import navItemsData from "../../../lib/utilitys/Data.json";
import Button from "../../common/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const navItems = navItemsData.NavItems;
  const [isMenuClick, setIsMenuClick] = useState(false);

  const Toggle = () => {
    setIsMenuClick(!isMenuClick);
  };
  return (
    <nav className="py-5">
      <Container>
        <div className="flex justify-between items-center gap-2.5 px-2 md:px-[25px] sm:px-[15px] lg:px-[30px]lg:py-4 md:py-3.5 sm:py-3 py-2.5 bg-white rounded-full">
          {/* logo */}
          <Logo>GoverningDocs</Logo>

          {/* list */}
          <div className=" hidden lg:flex items-center justify-center gap-4 text-accent">
            {navItems.map(({ label, link },index) => (
              <a
                href={link}
                key={index}
                className=" hover:text-primary transition-colors duration-150 hover:underline "
              >
                {label}
              </a>
            ))}
          </div>

          {/* Button */}
          <div className="flex items-center gap-4">
            <svg
              onClick={Toggle}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="lg:hidden block size-6 sm:size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>

            <Button>Get Started Today</Button>
          </div>
        </div>

        {isMenuClick && <MobileMenu Toggle={Toggle} />}
      </Container>
    </nav>
  );
}
