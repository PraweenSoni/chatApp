import React from "react";
import Left from "./home/leftpart/Left";
import Right from "./home/rightpart/Right";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/Authprovider";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />
      <Route
        path="/login"
        element={authUser ? <Navigate to={"/"} /> : <Login />}
      />
      <Route
        path="/Signup"
        element={authUser ? <Navigate to={"/"} /> : <Signup />}
      />
    </Routes>
  );
};

export default App;
