const AppReducer = (state, action) => {

  const {type, payload} = action;
  
  switch (type) {
    case "ADD_TO_MAP":
      
      console.log("ADD_TO_MAP: ", payload.events);

      let events = payload.events;
      return { ...state, events };

    case "DELETE_FROM_MAP":
      
      console.log("DELETE_FROM_MAP: ", payload.events);

      events = payload.events;
      return { ...state, events };

    case "SET_RESULTS":
    
      console.log("SET_RESULTS: ", payload);

      const results = payload.results;
      // console.log("results: ", results);
      return { ...state, results };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }

}
export default AppReducer;