import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import { AppProvider } from "./components/hooks/useAppContext";

function App() {
  
  return (
    <div className="App">
      <AppProvider>
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
      </AppProvider>
    </div>
  );
}

export default App;

/*
useParams -- might be named something else

useNavigate

not version 5 react router dom
*/
