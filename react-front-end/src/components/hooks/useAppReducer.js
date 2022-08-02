export const initialState = [
  {
    latitude: 43.64446719365264,
    longitude: -79.38649706503828,
  },
  {
    latitude: 43.64220060887206,
    longitude: -79.3864107609249,
  }   
]


const AppReducer = (state, action) => {

  const {type, payload} = action;
  
  switch (type) {
    case "ADD_TO_MAP":
      const events = payload.events;
      return { ...state, events };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }

}
export default AppReducer;