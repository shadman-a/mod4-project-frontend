import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/welcome">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
    </div>
  );
}

export default NavBar;
