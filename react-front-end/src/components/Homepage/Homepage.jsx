import React, { useEffect, useState } from "react";
import { Map } from "../Map/Map";
import { SearchBar } from "../SearchBar/SearchBar";
import { addToMap } from "../../helpers/MapFunctions";
import "./Homepage.css";
import Axios from "axios";

export default function Homepage() {
  useEffect(() => {
    Axios.get("/api/users/").then((res) => {
      console.log(res);
    });
  });

  console.log("test");

  const [events, setEvents] = useState([
    {
      latitude: 43.64446719365264,
      longitude: -79.38649706503828,
    },
    {
      latitude: 43.64220060887206,
      longitude: -79.3864107609249,
    },
  ]);

  // const events = [
  //   {
  //     latitude: 43.64446719365264,
  //     longitude: -79.38649706503828,
  //   },
  //   {
  //     latitude: 43.64220060887206,
  //     longitude: -79.3864107609249,
  //   }
  // ]

  return (
    <div className="wrapper">
      <SearchBar className="list" addFunc={setEvents} events={events} />
      <Map markers={events} addMarkers={setEvents} />
    </div>
  );
}
