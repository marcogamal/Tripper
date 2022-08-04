import React, { useContext } from 'react'
import { AppContext } from '../hooks/useAppContext';

export const ListItem = (props) => {

  const { addToMap } = useContext(AppContext);

  // Add marker
  const addMarker = () => {

    addToMap({
      id: props.results.id, 
      name: props.results.name,
      latitude: props.results.latitude, 
      longitude: props.results.longitude
    });
    console.log("adding event", props.results);
  };

  return (
    <li>
      {props && 
        <>
          <p>{props.results.name}</p>
          <p>Rating: {props.results.rating} ({props.results.review} reviews)</p>
          <button onClick={addMarker}>Add</button>
          <img src={props.results.image_url} alt="" height="150px" width="150px" />
        </>      
      }
    </li>
  )
}
