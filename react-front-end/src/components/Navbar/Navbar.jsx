import React from "react";
import "./Navbar.css";

const logo = require('./TripperLogo.png'); 

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarLogo" href="#">
      <img src={logo} width="400" height="150" alt=""></img>
      </div>
      <div className="SignIn">

      </div>
    </div>
  );
}