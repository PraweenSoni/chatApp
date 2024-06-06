import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

const Users = () => {
  const [allUsers, loading] = useGetAllUsers();
  // const allUserss = {
  //   name: 'John Doe',
  //   email: 'ps@gmail.com',
  // };
  return (
    <div className="px-5">
      <p className="px-2 py-2 mb-3 text-2xl border-b-4 border-indigo-500 text-white font-semibold">
        Chat's
      </p>
      <div
        className="overflow-y-auto scroll-hide-c overflow-hidden"
        style={{ maxHeight: "calc(78vh - 6vh)" }}
      >
        {allUsers.map((username, index) => (
          <User key={index} user={username} />
        ))}
      </div>
    </div>
  );
};

export default Users;
