import React, { createContext, useReducer } from "react";
import AppReducer from './useAppReducer';


const initialState = {
  events: [
    {
      id: 1,
      name: "CN Tower",
      latitude: 43.64446719365264,
      longitude: -79.38649706503828,
    },
    {
      id: 2,
      name: "Ripley's Aquarium",
      latitude: 43.64220060887206,
      longitude: -79.3864107609249,
    } 
  ],
  results: [],
}

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addToMap = (event) => {
    
    const updatedMap = state.events.concat(event);
    // console.log("addToMap: ", updatedMap);
    
    dispatch({
      type: "ADD_TO_MAP",
      payload: {
        events: updatedMap
      }
    });
  };

  const deleteFromMap = (id) => {
    
    const updatedMap = state.events.filter(el => el.id !== id);
    console.log("deleteFromMap: ", updatedMap);
    
    dispatch({
      type: "DELETE_FROM_MAP",
      payload: {
        events: updatedMap
      }
    });
  };  

  const setResults = (data) => {
    // console.log("addResults AppProvider: ", data);
    
    dispatch({
      type: "SET_RESULTS",
      payload: {
        results: data
      }
    });

  }

  const value = {
    events: state.events,
    addToMap,
    deleteFromMap,
    results: state.results,
    setResults,
  };

  return  (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
};
