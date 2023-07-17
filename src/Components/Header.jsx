import React from "react";
import { NavBar } from "./NavBar";
import { Socials } from "./Socials";
// import glasses from "../assets/img/logos/glasses.svg";
import logo from "../assets/img/logos/logo.svg";

export const Header = () => {
  return (
    <header className="h-20 flex bg-black fixed bg-none items-center  top-0 w-full text-white z-20">
      <div className="container mx-auto w-full h-full flex items-center justify-between sm:justify-around lg:justify-between">
        {/* <img src={logo} alt="" /> */}

        <NavBar />
        <Socials />
      </div>
    </header>
  );
};
