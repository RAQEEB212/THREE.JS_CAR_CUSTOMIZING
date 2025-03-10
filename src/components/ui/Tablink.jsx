import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Tablink({ text, path }) {
  return (
    <NavLink to={path}
    
    className={({isActive})=> `relative font-normal before:absolute before:h-0.5 before:w-0 hover:before:w-full hover:before:transition-all hover:before:duration-300 before:left-0 before:-bottom-1 before:bg-black ${isActive?"before:w-full" : ""}`}
    >
      {text}
    </NavLink>
  );
}
