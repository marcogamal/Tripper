import React from 'react'

export const ListItem = (props) => {

  //TODO: include button to Add event to map (save to DB)

  return (
    <li>
      {props && 
        <>
          <p>{props.name}</p>
          <p>Rating: {props.rating} ({props.review} reviews)</p>
          <button onClick={props.addFunc(props.latitude, props.longitude, props.events)}>Add</button>
        </>      
      }
    </li>
  )
}
