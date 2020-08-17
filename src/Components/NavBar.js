import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="home">Home</NavLink>
      <NavLink to="/characters" className="characters">Characters</NavLink>
      {/* <NavLink to /> */}
    </div>
  );
}

export default NavBar;
