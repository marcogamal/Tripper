import React from "react";
import "./Navbar.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { addToMap } from "../../helpers/MapFunctions";

const logo = require('./TripperLogo.png'); 

export default function Navbar(props) {
  const {events, results, setResults}=props
    return (
    <div className="navbar">
      <div className="navbarLogo" href="#">
      <img src={logo} width="400" height="150" alt=""></img>
      </div>
      <div className="SignIn">
      <SearchBar className="list" addFunc={addToMap} events={events} results={results} setResults={setResults}/>
      </div>
    </div>
  );
}