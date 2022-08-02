import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";

function App() {
const [results, setResults] = useState([])

const events = [];

  return (

    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar events={events} results={results} setResults={setResults}/>
              <Homepage events={events} results={results}/> 
            </>
          }
        />
      </Routes>
    </div>
  );

}



export default App;
