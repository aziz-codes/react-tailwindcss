import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import { EnvelopeIcon, BellIcon } from "@heroicons/react/24/outline";
import BottomNavigation from "./BottomNavigation";
import { UserAuth } from "../context/AuthContext";
import Popup from "./Modal";
const Navbar = () => {
  const { user } = UserAuth();
  const [isSmallScreen, setSmallScreen] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [clicked, setIsClicked] = useState(false);
  const handleClickAvatar = () => {
    setIsClicked((prevState) => !prevState);
    console.log(clicked);
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (screenSize <= 600) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, [screenSize]);

  return (
    <div className="relative flex flex-row justify-between p-0 h-12 items-center shadow-md md:sticky md:top-0 pr-2 pl-0">
      <div className="pl-2">
        <h4 className="font-bold text-xl">Bootcamp</h4>
      </div>
      {isSmallScreen ? (
        <BottomNavigation />
      ) : (
        <div
          className={`${
            isSmallScreen ? "hidden" : "flex items-center gap-4 md:gap-10"
          } `}
        >
          {links.map((item, index) => (
            <NavLink to={item.path} key={index} className="flex flex-row gap-3">
              <span className="text-sm font-medium tracking-tight text-sky-500 md:text-lg font-sans">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      )}

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

        <div className="rounded-full h-8 w-8 bg-gray-400">
          <img
            src={`${user.photoURL}`}
            alt="avatar"
            className="h-8 w-8 rounded-full cursor-pointer"
            onClick={handleClickAvatar}
          />
        </div>
      </div>
      <div className="absolute top-5 left-5">{clicked ? <Popup /> : null}</div>
    </div>
  );
};

export default Navbar;
