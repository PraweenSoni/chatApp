import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const Typesend = () => {
  return (
    <div className="flex items-center space-x-3 h-[10vh]">
      <MdOutlineEmojiEmotions className="text-4xl cursor-pointer ml-4" />
      <div className="w-[86%]">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered outline-none w-full"
        />
      </div>
      <button>
        <AiOutlineSend className=" text-4xl cursor-pointer" />
      </button>
    </div>
  );
};

export default Typesend;
