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
  // keyword: "",
  // location: "Toronto",
  results: [],
}

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addToMap = (event) => {
    console.log("event AppProvider", event);
    const updatedMap = state.events.concat(event);

    console.log("addToMap AppProvider: ", updatedMap);
    
    dispatch({
      type: "ADD_TO_MAP",
      payload: {
        events: updatedMap
      }
    });
  };

  const setResults = (data) => {
    console.log("addResults AppProvider: ", data);
    
    dispatch({
      type: "SET_RESULTS",
      payload: {
        results: data
      }
    });

  }

  // const setKeyword = (string) => {
  //   console.log("setKeyword");
  //   dispatch({
  //     type: "SET_KEYWORD",
  //     payload: {
  //       keyword: string
  //     }
  //   })
  // }

  // const setLocation = (string) => {
  //   console.log("setLocation");
  //   dispatch({
  //     type: "SET_LOCATION",
  //     payload: {
  //       location: string
  //     }
  //   })
  // }

  const value = {
    events: state.events,
    addToMap,
    // keyword: state.keyword,
    // setKeyword,
    // location: state.location,
    // setLocation,
    results: state.results,
    setResults,
  };

  // console.log("appProvider", value.events);

  return  (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
};
