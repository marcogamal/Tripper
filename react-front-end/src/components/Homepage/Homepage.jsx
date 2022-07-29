import React, { useState } from "react";
import { Map } from "../Map/Map";
import "./Homepage.css";

export default function Homepage() {



  return (
    <div className="wrapper">
      <div className="list">LIST OF PLACES HERE</div>

      <Map/>
    </div>
  );
}
