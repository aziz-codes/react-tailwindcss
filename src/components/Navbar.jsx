import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import { EnvelopeIcon, BellIcon } from "@heroicons/react/24/outline";
import BottomNavigation from "./BottomNavigation";
import { UserAuth } from "../context/AuthContext";
import Popup from "./Modal";
import Chat from "./Chat";
import CircularProgress from "@mui/material/CircularProgress";

const Navbar = () => {
  let MessangerRef = useRef(null);
  useOutsideAlerter(MessangerRef);
  const { user, loading } = UserAuth();
  const [isSmallScreen, setSmallScreen] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setIsClicked] = useState(false);
  const [chatClicked, setChatClicked] = useState(false);
  const handleClickAvatar = () => {
    setIsClicked(true);
    setIsOpen((prevState) => !prevState);
  };
  const handleChatModal = () => {
    setChatClicked(!chatClicked);
  };
  const handleIsOpen = () => {
    setIsOpen(false);
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

  //to check click event outside the message component.

  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!MessangerRef.current.contains(e.target)) {
  //       setChatClicked(false);
  //     }
  //   };
  //   window.addEventListener("mousedown", handler);

  //   return () => document.removeEventListener("mousedown");
  // }, []);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setChatClicked(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const normalLink =
    "text-sm font-medium tracking-tight text-white md:text-lg font-sans ";
  const activeLink =
    "text-sm font-medium tracking-tight text-white md:text-lg font-sans  border-b-2 border-sky-600";
  return (
    <div className="relative flex flex-row md:justify-between justify-around bg-white z-50 p-0 h-12 items-center shadow-md md:sticky md:top-0 pr-2 pl-0">
      <div className="pl-2">
        <h4 className="font-bold text-xl">Bootcamp</h4>
      </div>
      {isSmallScreen ? (
        <BottomNavigation />
      ) : (
        <div
          className={`${
            isSmallScreen ? "hidden" : "flex items-center gap-4 md:gap-10 "
          } `}
        >
          {links.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className="text-sm font-medium tracking-tight text-black md:text-lg font-sans">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4">
        <div className="relative icons">
          <EnvelopeIcon onClick={handleChatModal} />
          <div className="h-2 w-2 bg-green-600 rounded-full absolute top-1 animate-pulse"></div>
        </div>
        {chatClicked ? (
          <div
            className="md:top-10 absolute md:right-[100px] md:w-[20rem] h-[28rem] m-auto scrollbar-thin
           scrollbar-thumb-gray-300  scrollbar-track-gray-400 
            overflow-x-hidden overflow-y-auto flex items-center justify-center right-4 top-24"
            ref={MessangerRef}
          >
            <Chat />
          </div>
        ) : null}
        <div className="icons relative">
          <BellIcon />
          <div
            className="h-3 w-3 bg-red-600 rounded-full absolute -top-1
           animate-pulse text-xs flex items-center justify-center p-1 font-bold"
          >
            3
          </div>
        </div>

        <div className="rounded-full h-8 w-8 bg-gray-400 flex items-center justify-center">
          {loading ? (
            <div className="spiner animate-spin h-6 w-6 rounded-full bg-gray-300 visually-hidden block">
              ........
            </div>
          ) : (
            <img
              src={`${user.photoURL}`}
              alt="avt"
              className="h-8 w-8 rounded-full cursor-pointer"
              onClick={handleClickAvatar}
            />
          )}
        </div>
      </div>
      <div className="absolute top-5 left-5">
        {clicked ? <Popup isOpen={isOpen} handleIsOpen={handleIsOpen} /> : null}
      </div>
    </div>
  );
};

export default Navbar;
