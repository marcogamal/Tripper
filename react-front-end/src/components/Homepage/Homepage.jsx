import React, { useEffect } from "react";
import { Map } from "../Map/Map";
import "./Homepage.css";
import { ResultList } from "../ResultList/ResultList";
import { ListEvents } from "../ListEvents/ListEvents";

export default function Homepage() {
  
  const user = {
    id: 1,
    lat: 43.64446719365264,
    lng: -79.38649706503828,
  };
  
  return (
    <div className="wrapper">
      <ListEvents />
      <ResultList />
      
      {user && <Map user={user}/>}
      
    </div>
  );
}
