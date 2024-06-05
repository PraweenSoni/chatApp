import React from "react";
import ChatUserHeader from "./ChatUserHeader";
import Messages from "./Messages";
import Typesend from "./Typesend";

const Right = () => {
  return (
    <div className="w-[70%] bg-slate-800 text-white">
      <ChatUserHeader />
      <div className="scroll-hide-c overflow-y-auto" style={{maxHeight:"calc(88vh - 10vh)"}}>
        <Messages />
      </div>
      <Typesend />
    </div>
  );
};

export default Right;
