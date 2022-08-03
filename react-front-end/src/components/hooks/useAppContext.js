import React, { createContext, useReducer } from "react";
import AppReducer from './useAppReducer';


const initialState = {
  events: [
    {
      id: 1,
      latitude: 43.64446719365264,
      longitude: -79.38649706503828,
    },
    {
      id: 2,
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

  const addToMap = (id, lat, lng) => {

    const updatedMap = state.events.concat({
      id,
      latitude: lat,
      longitude: lng,
    });

    console.log("addToMap AppProvider: ", updatedMap);
    
    dispatch({
      type: "ADD_TO_MAP",
      payload: {
        events: updatedMap
      }
    });
  };

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

  const setResults = (data) => {
    console.log("addResults: ", data);
    state.results = data;
    dispatch({
      type: "SET_RESULTS",
      payload: {
        results: state.results
      }
    });

  }

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
