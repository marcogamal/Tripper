import React from "react";
import { Map } from "../Map/Map";
import "./Homepage.css";
import { ResultList } from "../ResultList/ResultList";

export default function Homepage() {
  return (
    <div className="wrapper">
      <ResultList />
      <Map />
      
    </div>
  );
}
