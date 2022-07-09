import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState("hidden");
  const displayMenu = () => {
    if (show === "hidden") {
      setShow("block");
    } else {
      setShow("hidden");
    }
  };
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-600 to-black ... h-28 flex flex-row w-screen items-center">
        <div className=" justify-center items-center w-5/12 ">
          <h1 className=" justify-around pl-10 text-3xl font-extrabold text-blue-50 tracking-wider">
            MERN
          </h1>
        </div>
        <div className="w-3/5 pr-6 flex flex-row justify-end ">
          <ul className="flex-row justify-end text-white gap-8 h-8 hidden md:flex ">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/contact">Contact </Link>
            </li>
            <li>
              <Link to="/login" > Login</Link>
            </li>
            <li>
              <Link to="/signup"> SignUp</Link>
            </li>
          </ul>

          <div className="block md:hidden">

            <MenuIcon className=" text-white" onClick={displayMenu} />

            <div className={`${show} w-2/4 h-fit bg-white `}>
              <ul className="flex-col text-black absolute right-2 rounded-md bg-white px-4 py-4 shadow-md tracking-wider shadow-black divide-y divide-solid text-center ">
                <li onClick={displayMenu}>
                  <Link to="/" >Home </Link>
                </li>
                <li onClick={displayMenu} >
                  <Link to="/about">About </Link>
                </li>
                <li onClick={displayMenu} >
                  <Link to="/contact"> Contact</Link>
                </li>
                <li onClick={displayMenu} >
                  <Link to="/login"> Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
