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

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};
export default AppReducer;
