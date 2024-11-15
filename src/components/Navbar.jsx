import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // console.log("I am current",user)
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1>{user && user.email}</h1>
        </div>
        <div className="space-x-5 lg:ml-10">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/career">Career</Link>
        </div>
        <div className="flex items-center gap-5">
          <img src={profile} alt="" />

          {user && user?.email ? (
            <button
              onClick={logOut}
              className="bg-zinc-700 px-10 py-2 text-white font-bold"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="bg-zinc-700 px-10 py-2 text-white font-bold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
