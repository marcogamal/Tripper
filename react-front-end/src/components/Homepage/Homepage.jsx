import React, { useEffect } from "react";
import { Map } from "../Map/Map";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Homepage.css";
import Axios from "axios";

export default function Homepage() {
  useEffect(() => {
    Axios.get("/api/users/").then((res) => {
      // console.log("api/users", res);
    });
  });
 
  return (
    <div className="wrapper">
      <SearchBar className="list" />
      <Map />
      
    </div>
  );
}
