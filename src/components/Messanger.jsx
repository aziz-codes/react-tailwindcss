import React from "react";
import { Backdrop } from "@mui/material";
import { UserAuth } from "../context/AuthContext";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
const Messanger = () => {
  const { chatOpen } = UserAuth();
  return (
    <Backdrop open={chatOpen}>
      <div className="border shadow-2xl flex flex-col absolute m-auto h-3/4 w-80 bg-white">
        <div>
          <div className="scrollbar-thin overflow-auto">
            <p className="p-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              magnam molestias explicabo laborum facilis impedit, esse atque sit
              tenetur et dignissimos, tempora repellendus eos non rem cumque.
              Tempore, expedita possimus! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sequi magnam molestias explicabo
              laborum facilis impedit, esse atque sit tenetur et dignissimos,
              tempora repellendus eos non rem cumque. Tempore, expedita
              possimus! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Sequi magnam molestias explicabo laborum facilis impedit,
              esse atque sit tenetur et dignissimos, tempora repellendus eos non
              rem cumque. Tempore, expedita possimus! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Sequi magnam molestias
              explicabo laborum facilis impedit, esse atque sit tenetur et
              dignissimos, tempora repellendus eos non rem cumque. Tempore,
              expedita possimus! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Sequi magnam molestias explicabo laborum facilis
              impedit, esse atque sit tenetur et dignissimos, tempora
              repellendus eos non rem cumque. Tempore, expedita possimus! Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Sequi magnam
              molestias explicabo laborum facilis impedit, esse atque sit
              tenetur et dignissimos, tempora repellendus eos non rem cumque.
              Tempore, expedita possimus!
            </p>
          </div>
          <div className="flex flex-row w-full pt-10 border gap-2 items-center justify-start">
            <textarea
              type="textarea"
              placeholder="enter message"
              className=" h-7 w-full p-2 outline-none bg-gray-300 scrollbar "
              cols={5}
              rows={2}
            />
            <PaperAirplaneIcon className="icons" />
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default Messanger;
