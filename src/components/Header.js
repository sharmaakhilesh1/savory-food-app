import React, { useState } from "react";
// Below way shows the way of named import
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Logout");
  return (
    <div className="Header">
      <img className="logo" alt="logo" src={LOGO_URL}></img>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <Span>Not a right way a tag reload the page</Span>
            <a href="/about">About</a> */}
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">ContactUS</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName(btnName === "Logout" ? "Login" : "Logout");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
