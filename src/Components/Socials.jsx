import React from "react";
import { social } from "../data";

export const Socials = () => {
  return (
    <div className=" lg:block">
      <ul className="flex space-x-6">
        {social.map((item, index) => (
          <li
            key={index}
            className={`flex justify-center items-center ${
              item.color ? item.color : "text-white"
            } ${item.colorHover ? item.colorHover : "text-fuchsia-500"}`}
          >
            <a className="text-base" href={item.href}>
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
