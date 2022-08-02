import React, { useCallback } from 'react'

export const ListItem = (props) => {

  //TODO: include button to Add event to map (save to DB)

  // Add marker
  const addMarker = () => {
    const newMarker = {
      latitude: props.latitude,
      longitude: props.longitude,
    };
    props.addFunc((prevMarkers) => [...prevMarkers, newMarker]);
    console.log("adding event");
  };

  return (
    <li>
      {props && 
        <>
          <p>{props.name}</p>
          <p>Rating: {props.rating} ({props.review} reviews)</p>
          {/* <button onClick={() => props.addFunc(props.latitude, props.longitude, props.events)}>Add</button> */}
          <button onClick={addMarker}>Add</button>
        </>      
      }
    </li>
  )
}
