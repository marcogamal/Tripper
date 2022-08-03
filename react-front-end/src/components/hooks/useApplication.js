import axios from 'axios';
import { useEffect, useReducer } from 'react'

export const useApplicationData = () => {

  const SET_EVENTS = "SET_EVENTS";
  
  // Initialize data from API
  // useEffect(() => {
  //   Promise.all([
  //     axios.get("/api/days"),
  //     axios.get("/api/appointments"),
  //     axios.get("/api/interviewers"),
  //   ]).then((all) => {
  //     dispatch({
  //       type: SET_APPLICATION_DATA,
  //       days: all[0].data,
  //       appointments: all[1].data,
  //       interviewers: all[2].data
  //     });
  //   })
  // }, [])  

  function reducer(state, action) {
    switch (action.type) {
      case SET_EVENTS:
        const events = action.events;
        return { ...state, events };

      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }  

  const [state, dispatch] = useReducer(reducer, {
    events: [],
    plans: [],
  });

  const setEvents = events => dispatch({ type: SET_EVENTS, events });
  
  // Booking Interview: clicking Save
  // function bookInterview(id, interview, editInterview) {    
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview }
  //   };
    
  //   return axios.put(`/api/appointments/${id}`, appointment)
  //     .then(() => {!editInterview && updateSpots("add")})
  //     .then(() => {dispatch({ type: SET_INTERVIEW, id, interview })})
  // };
  
  // Deleting Interview: clicking trash icon
  // function cancelInterview(id) {
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: null
  //   };
    
  //   return axios.delete(`/api/appointments/${id}`, appointment)
  //     .then(() => {updateSpots("delete")})
  //     .then(() => {dispatch({ type: SET_INTERVIEW, id, interview: null })})
  // };

  // Loop through days and set up number of spots
  // const updateSpots = (operation) => {
  //   let updatedDays = state.days;
  //   updatedDays.map((day) => {

  //     if(state.day === day.name) {
  //       // Add interview: spots = spots - 1
  //       if(operation === "add") {
  //         let spots = day.spots - 1;
  //         day.spots = spots;
  //       }
  //       if(operation === "delete") {
  //         let spots = day.spots + 1;
  //         day.spots = spots;
  //       }
  //       return {...day};
  //     }
  //     return day;
  //   });

  //   dispatch({type: SET_SPOTS, updatedDays });
  // };


  // Returning ...
  return {
    state,
    setEvents,
    // bookInterview,
    // cancelInterview
  }
}
