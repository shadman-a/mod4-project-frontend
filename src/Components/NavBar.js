import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="navbar">
      <NavLink to="/" className="home">Home</NavLink>
      <NavLink to="/characters" className="characters">Characters</NavLink>
    </div>
  );
}

export default NavBar;
