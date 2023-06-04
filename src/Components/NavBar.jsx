import React from "react";
import { navigation } from "../data";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-1 space-x-8 capitalize text-[15px] ">
        {navigation.map((item, index) => {
          return (
            <li
              key={index}
              className="text-white list-none hover:text-fuchsia-500 cursor-pointer"
            >
              <Link
                to={item.href}
                className="transition-all duration-400"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
