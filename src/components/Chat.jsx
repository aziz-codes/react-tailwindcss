import { ListItem } from "@mui/material";
import React from "react";
import { chat } from "../data/dummy";
const Chat = () => {
  return (
    <div className=" shadow-lg border rounded-lg pb-4 pt-2 bg-white">
      <div className="flex flex-col gap-2 mx-1 w-64 max-h-80 scrollbar-thin scrollbar-thumb-gray-300  scrollbar-track-gray-400  overflow-x-hidden overflow-y-auto mt-4">
        {chat.map((user, index) => (
          <div
            className="flex flex-row w-full items-center bg-white mt-2 hover:bg-gray-200 cursor-pointer p-2 rounded-md pr-10"
            key={index}
          >
            {user.avatar === "" ? (
              <div className="h-10 w-10 min-w-[2.5rem] rounded-full bg-gray-300 flex flex-col justify-center items-center">
                {user.name.charAt(0)}
              </div>
            ) : (
              <img src={user.avatar} className="h-8 w-8" />
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
