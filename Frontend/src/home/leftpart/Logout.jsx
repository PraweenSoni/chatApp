import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";

const Logout = () => {
  const [loading,setLoading]=useState(false);
  const handleLogout = async ()=>{
    try {
      setLoading(true)
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false)
      alert("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in logout",error);
    }
  }
  return (
    <div className="px-5 mt-2 border-t-4 border-indigo-500">
      <button className="h-[6vh] w-24 rounded-md mt-1 flex items-center hover:bg-slate-500 duration-200 cursor-pointer" onClick={handleLogout}>
          <BiLogOut className="text-3xl" />
          <p className="font-semibold">Logout</p>
      </button>
    </div>
  );
};

export default Logout;
