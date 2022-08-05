import React from "react";
import { Map } from "../Map/Map";
import "./Homepage.css";
import { ResultList } from "../ResultList/ResultList";
import { ListEvents } from "../ListEvents/ListEvents";

export default function Homepage() {
  return (
    <div className="wrapper">
      <ResultList />
      <ListEvents />
      <Map />
      
    </div>
  );
}
