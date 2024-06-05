import React from "react";
import { BiLogOut } from "react-icons/bi";

const Logout = () => {
  return (
    <div className="px-5 mt-2 border-t-4 border-indigo-500">
      <div className="h-[6vh] w-24 rounded-md mt-1 flex items-center hover:bg-slate-500 duration-200 cursor-pointer">
        <BiLogOut className="text-3xl"/>
        <p className="font-semibold">Logout</p>
      </div>
    </div>
  );
};

export default Logout;
