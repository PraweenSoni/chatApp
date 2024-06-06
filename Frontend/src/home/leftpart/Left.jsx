import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

const Left = () => {
  return (
    <div className="w-[30%] bg-black text-white">
      <Search />
      <div
        className="scroll-hide-c overflow-y-auto"
        style={{ minHeight: "calc(90vh - 10vh)" }}
      >
        <Users />
      </div>
      <Logout />
    </div>
  );
};

export default Left;
