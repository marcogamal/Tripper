import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  console.log("test");
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
        <Route
          path="/plans/:planId"
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

/*
useParams -- might be named something else

useNavigate

not version 5 react router dom
*/
