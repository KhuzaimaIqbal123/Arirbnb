import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/experiences">Experiences</a>
        <a href="/online-experiences">Online Experiences</a>
      </div>
      <div className="navbar-user">
        <button className="btn">Login</button>
        <button className="btn">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
