import React from "react";
import { Socials } from "./Socials";
import logo from "../assets/img/logos/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto">
        <div className="flex flex-col h-[fit] lg:flex-row space-y-6 lg:space-y-0 items-center justify-around">
          <div className="flex w-fit justify-center flex-col items-center gap-5 space-x-6">
            <p> Here's links to my LinkedIn and Github </p>
            <Socials />
          </div>
          <img className="w-1/4" src={logo} />
          <p> 2023 Kai Zhao. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
