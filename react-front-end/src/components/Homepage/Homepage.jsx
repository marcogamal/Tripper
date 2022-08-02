import React from "react";
import { Map } from "../Map/Map";
import { ResultList } from '../ResultList/ResultList';
import { addToMap } from "../../helpers/MapFunctions";
import "./Homepage.css";

export default function Homepage(props) {
const {events, results} = props
console.log("this is result from homepage", results)

  return (
    <div className="wrapper">
        <h3>Results:</h3>
        <ResultList results={results} addFunc={addToMap} events={props.events}/>
      <Map events={events}/>
    </div>
  );
}
