import React from "react";
// Below way shows the way of named import
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="Header">
      <img className="logo" alt="logo" src={LOGO_URL}></img>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>ContactUS</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
