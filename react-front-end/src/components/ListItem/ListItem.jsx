import React, { useContext } from 'react'
import { AppContext } from '../hooks/useAppContext';

export const ListItem = (props) => {

  const { addToMap } = useContext(AppContext);

  // Add marker
  const addMarker = () => {

    addToMap(props.results.id, props.results.latitude, props.results.longitude);
    console.log("adding event");
  };

  return (
    <li>
      {props && 
        <>
          <p>{props.results.name}</p>
          <p>Rating: {props.results.rating} ({props.results.review} reviews)</p>
          <button onClick={addMarker}>Add</button>
        </>      
      }
    </li>
  )
}
