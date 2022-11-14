import React from "react";
import { Backdrop } from "@mui/material";
import { UserAuth } from "../context/AuthContext";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { XMarkIcon } from "@heroicons/react/24/outline";
const Messanger = () => {
  const { chatOpen, setChatOpen } = UserAuth();
  return (
    <Backdrop open={chatOpen}>
      <div className="border shadow-2xl flex flex-col absolute m-auto h-3/4 w-80 bg-white">
        <div className="w-full h-14 flex flex-row shadow-2xl border p-0 items-center justify-between header pt-1 pb-1">
          <div className="flex flex-row">
            <div className="relative">
              <Avatar className="p-2 mx-2" sx={{ width: 35, height: 35 }}>
                H
              </Avatar>
              <div className="h-2 w-2 rounded-full bg-green-600 mt-1 absolute top-5 right-3"></div>
            </div>
            <div className="flex flex-col">
              <h4>Aziz</h4>

              <span className="text-xs text-gray-400 tracking-tight -mt-1 font-medium">
                active now
              </span>
            </div>
          </div>
          <XMarkIcon
            className="icons text-black"
            title="close"
            onClick={() => {
              setChatOpen(false);
            }}
          />
        </div>
        <Divider light />
        <div className="scrollbar-thin overflow-auto">
          <p className="p-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            magnam molestias explicabo laborum facilis impedit, esse atque sit
            tenetur et dignissimos, tempora repellendus eos non rem cumque.
            Tempore, expedita possimus! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sequi magnam molestias explicabo laborum facilis
            impedit, esse atque sit tenetur et dignissimos, tempora repellendus
            eos non rem cumque. Tempore, expedita possimus! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Sequi magnam molestias
            explicabo laborum facilis impedit, esse atque sit tenetur et
            dignissimos, tempora repellendus eos non rem cumque. Tempore,
            expedita possimus! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sequi magnam molestias explicabo laborum facilis
            impedit, esse atque sit tenetur et dignissimos, tempora repellendus
            eos non rem cumque. Tempore, expedita possimus! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Sequi magnam molestias
            explicabo laborum facilis impedit, esse atque sit tenetur et
            dignissimos, tempora repellendus eos non rem cumque. Tempore,
            expedita possimus! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sequi magnam molestias explicabo laborum facilis
            impedit, esse atque sit tenetur et dignissimos, tempora repellendus
            eos non rem cumque. Tempore, expedita possimus!
          </p>
        </div>
        <div className="flex flex-row w-full pt-10 border gap-2 items-center justify-start pb-4">
          <TextField id="outlined-basic" label="" variant="outlined" />
          <PaperAirplaneIcon className="icons" />
        </div>
      </div>
    </Backdrop>
  );
};

export default Messanger;
