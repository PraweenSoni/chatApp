import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="scroll-hide-c overflow-y-auto" style={{minHeight:"calc(88vh - 10vh)"}}>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </div>
  );
};

export default Messages;
