import React, { useEffect } from "react";
import { Map } from "../Map/Map";
import "./Homepage.css";
import { ResultList } from "../ResultList/ResultList";
import { ListEvents } from "../ListEvents/ListEvents";

export default function Homepage() {
  
  const user = {
    id: 1
  };
  
  return (
    <div className="wrapper">
      <ResultList />
      <ListEvents />
      
      {user && <Map user_id={user.id}/>}
      
    </div>
  );
}
