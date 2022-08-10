import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./useAppReducer";
import Axios from "axios";

const initialState = {
  //Load events where user_id = 1 and plans[0] (initial)
  events: [],
  results: [],
  //Load plans where user_id = 1
  plans: [
    {
      id: 1,
      name: "Day in Toronto",
      user_id: 1,
    },
    {
      id: 2,
      name: "Fun Weekend",
      user_id: 1,
    },
  ],
  selectedPlan: 1,
  showRoutes: false,
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    Promise.all([
      Axios.get("/api/users/plans/1"),
      Axios.get("/api/users/plans"),
    ]).then((res) => {
      console.log(res[0].data.event);

      dispatch({
        type: "SET_EVENTS",
        payload: {
          events: res[0].data.event,
        },
      });

      dispatch({
        type: "SET_PLANS",
        payload: {
          plans: res[1].data.plan,
        },
      });
    });
  }, []);

  const changePlan = (planId) => {
    Axios.get(`/api/users/plans/${planId}`).then((res) => {
      dispatch({
        type: "CHANGE_PLAN",
        payload: {
          events: res.data.event,
          selectedPlan: planId,
        },
      });
    });
  };

  const addToMap = (event) => {
    const updatedMap = state.events.concat(event);

    const updatedResults = state.results.filter((res) => event.id !== res.id);

    const selectedPlan = state.selectedPlan;

    console.log("EVENT ADDED: ", event);

    Axios.put(`/api/users/plans/${selectedPlan}`, { event }).then((res) => {
      console.log(res);
    });

    dispatch({
      type: "ADD_TO_MAP",
      payload: {
        events: updatedMap,
        results: updatedResults,
      },
    });
  };

  const deleteFromMap = (id) => {
    const updatedMap = state.events.filter((el) => el.id !== id);
    console.log("deleteFromMap: ", updatedMap);
    console.log("id of deleted", id);

    Axios.delete(`/api/users/events/${id}`).then(() => {
      console.log("Cancelled.");
    });

    dispatch({
      type: "DELETE_FROM_MAP",
      payload: {
        events: updatedMap,
      },
    });
  };

  const setResults = (data) => {
    // console.log("addResults AppProvider: ", data);

    dispatch({
      type: "SET_RESULTS",
      payload: {
        results: data,
      },
    });
  };

  const changeIconColor = (id) => {
    const index = state.events.findIndex((ele) => ele.id === id);
    //Mark as done/undone
    state.events[index].done = !state.events[index].done;

    Axios.put(`/api/users/events/done/${id}`).then(() => {
      console.log("Marked as done!");
    });

    dispatch({
      type: "UPDATE_ICON_COLOR",
      payload: {
        events: state.events,
      },
    });
  };

  const onOffRoutes = () => {
    //Turn on/off routes available
    state.showRoutes = !state.showRoutes;

    dispatch({
      type: "ROUTES_SWITCH",
      payload: {
        events: state.showRoutes,
      },
    });
  };

  const value = {
    events: state.events,
    changePlan,
    addToMap,
    deleteFromMap,
    results: state.results,
    setResults,
    changeIconColor,
    plans: state.plans,
    showRoutes: state.showRoutes,
    onOffRoutes,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
