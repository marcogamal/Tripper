import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (

    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
            </>
          }
        />
      </Routes>
    </div>
  );

}



export default App;
