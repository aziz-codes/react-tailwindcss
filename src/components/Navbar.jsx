import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import { EnvelopeIcon, BellIcon } from "@heroicons/react/24/outline";
const Navbar = () => {
  return (
    <div className="relative flex flex-row justify-between p-2 h-10 items-center shadow-md md:sticky md:top-0">
      <div>
        <h4 className="font-bold text-xl">Bootcamp</h4>
      </div>
      <div className="flex items-center gap-4">
        {links.map((item, index) => (
          <NavLink to={item.path} key={index} className="flex flex-row gap-3">
            <span className="text-xs font-medium tracking-tight text-sky-500">
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div>
          <EnvelopeIcon className="icons" />
          <div className="h-2 w-2 bg-green-600 rounded-full absolute top-2 animate-pulse"></div>
        </div>
        <div>
          <BellIcon className="icons" />
          <div className="h-3 w-3 bg-red-600 rounded-full absolute top-1 animate-pulse text-xs flex items-center justify-center p-1 font-bold">
            3
          </div>
        </div>

        <div className="rounded-full h-8 w-8 bg-gray-400"></div>
      </div>
    </div>
  );
};

export default Navbar;
