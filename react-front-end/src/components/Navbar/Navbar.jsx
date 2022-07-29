import React, { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <SearchBar/>
    </div>
  );
}