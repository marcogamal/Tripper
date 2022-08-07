const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_MAP":
      console.log("ADD_TO_MAP: ", payload.events);

      let events = payload.events;
      let results = payload.results;
      return { ...state, events, results };

    case "DELETE_FROM_MAP":
      console.log("DELETE_FROM_MAP: ", payload.events);

      events = payload.events;
      return { ...state, events };

    case "SET_RESULTS":
      console.log("SET_RESULTS: ", payload);

      results = payload.results;
      return { ...state, results };

    case "UPDATE_ICON_COLOR":
      console.log("UPDATE_ICON_COLOR: ", payload.events);

      events = payload.events;
      return { ...state, events };

    case "SET_EVENTS":
      console.log("SET_EVENTS: ", payload.events);

      events = payload.events;
      return { ...state, events };

    case "SET_PLANS":
      console.log("SET_PLANS: ", payload.plans);

      let plans = payload.plans;
      return { ...state, plans };

    case "CHANGE_PLAN":
      console.log("CHANGE_PLAN: ", payload);

      events = payload.events;
      let selectedPlan = payload.selectedPlan;
      return { ...state, events, selectedPlan };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};
export default AppReducer;
