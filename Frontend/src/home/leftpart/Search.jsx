import React from "react";
import { MdManageSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className="px-5 py-4 h-[10vh]">
      <form action="">
        <label className="input input-bordered hover:border-gray-500 duration-100 flex items-center gap-2">
          <MdManageSearch className="text-3xl" />
          <input type="text" className="grow" placeholder="Search" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg> */}
        </label>
      </form>
    </div>
  );
};

export default Search;
