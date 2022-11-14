import React from "react";
import { links } from "../data/dummy";
import { NavLink } from "react-router-dom";
const BottomNavigation = () => {
  return (
    <div
      className="fixed bottom-0 h-10 flex flex-row items-center
     justify-betwee border shadow-gray-200 w-full bg-white z-50"
    >
      <div className="w-full flex flex-row justify-between p-2">
        {links.map((item, index) => (
          <NavLink to={item.path} key={index} className="flex">
            <span className="icons">{item.icon}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
