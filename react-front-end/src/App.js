import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";

function App() {
const [result2, setResult2] = useState([])
const events = [
  {
    latitude: 43.64446719365264,
    longitude: -79.38649706503828,
  },
  {
    latitude: 43.64220060887206,
    longitude: -79.3864107609249,
  }
];
  return (

    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar events={events} results={result2} setResults={setResult2}/>
              <Homepage events={events} results={result2}/> 
            </>
          }
        />
      </Routes>
    </div>
  );

}



export default App;
