import React from "react";

const ChatUserHeader = () => {
  return (
    <div className=" border-b-4 h-[10vh] border-b-indigo-500">
      <div className="flex items-center w-40 space-x-2 ml-6 mt-2 py-1 px-2 hover:bg-gray-600 duration-200 rounded-md">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div>
          <p>UserName</p>
          <span className="text-gray-300 text-sm">Offline</span>
        </div>
      </div>
    </div>
  );
};

export default ChatUserHeader;
