import React from "react";
import { Map } from "../Map/Map";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Homepage.css";

export default function Homepage() {



  return (
    <div className="wrapper">
      <SearchBar className="list"/>
      {/* <div className="list">LIST OF PLACES HERE</div> */}

      <Map/>
    </div>
  );
}
