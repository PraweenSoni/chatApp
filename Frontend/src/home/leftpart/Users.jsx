import React from "react";
import User from "./User";

const Users = () => {
  return (
    <div className="px-5">
      <p className="px-2 py-2 mb-3 text-2xl border-b-4 border-indigo-500 text-white font-semibold">
        Chat's
      </p>
      <div className="overflow-y-auto scroll-hide-c overflow-hidden" style={{maxHeight:"calc(78vh - 6vh)"}}>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
      </div>
    </div>
  );
};

export default Users;
