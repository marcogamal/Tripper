import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Navbar.css";

const logo = require('./TripperLogo.png'); 

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarLogo" href="#">
      <img src={logo} width="400" height="150" alt=""></img>
      </div>

      <SearchBar/>

      <div className="SignIn">

      </div>
    </div>
  );
}