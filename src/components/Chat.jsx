import React from "react";
import { chat } from "../data/dummy";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserAuth } from "../context/AuthContext";
const Chat = () => {
  const { setChatOpen } = UserAuth();
  return (
    <div className=" shadow-lg border rounded-lg pb-4 pt-2 bg-white">
      <div className="flex flex-col gap-2 mx-2 pr-1  mt-1">
        <h3 className="font-bold tracking-normal text-2xl">Chats</h3>
        <div className="flex w-full p-2 rounded-xl bg-gray-200 h-8 items-center">
          <MagnifyingGlassIcon className="h-5 w-5" />
          <input
            type="text"
            placeholder="Search Messanger"
            className="relative outline-none h-4 w-full bg-transparent ml-1"
          />
        </div>
        {chat.map((user, index) => (
          <div
            className="flex flex-row w-full items-center bg-white mt-2 hover:bg-gray-200 cursor-pointer p-2 rounded-md"
            key={index}
            onClick={() => {
              setChatOpen(true);
            }}
          >
            {user.avatar === "" ? (
              <div className="h-10 w-10 min-w-[2.5rem] rounded-full bg-gray-300 flex flex-col justify-center items-center">
                {user.name.charAt(0)}
              </div>
            ) : (
              <img src={user.avatar} className="h-8 w-8" alt="avatar" />
            )}
            <div className="flex flex-col ml-2 pb-2">
              <label className="font-bold tracking-normal text-md">
                {user.name}
              </label>
              <p className="text-black text-sm -mt-1 w-full overflow-hidden max-h-10 text-clip">
                {user.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
