const AppReducer = (state, action) => {

  const {type, payload} = action;
  
  switch (type) {
    case "ADD_TO_MAP":
      
      console.log("ADD_TO_MAP", payload.events);

      const events = payload.events;
      return { ...state, events };

    case "SET_RESULTS":
    
      console.log("SET_RESULTS", payload);

      const results = payload.results;
      console.log("results: ", results);
      return { ...state, results };

    
    // case "SET_KEYWORD":
      
    //   console.log("SET_KEYWORD", payload);
    //   const keyword = payload.keyword;
    //   return { keyword };

    // case "SET_LOCATION":
    
    //   console.log("SET_LOCATION", payload);
    //   const location = payload.location;
    //   return { location };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }

}
export default AppReducer;