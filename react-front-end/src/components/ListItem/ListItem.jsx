import React from 'react'

export const ListItem = (props) => {
const {latitude, longitude, events, addFunc, rating, review, name} = props
  //TODO: include button to Add event to map (save to DB)

  return (
    <li>
      {props && 
        <>
          <p>{name}</p>
          <p>Rating: {rating} ({review} reviews)</p>
          <button onClick={addFunc(latitude, longitude, events)}>Add</button>
        </>      
      }
    </li>
  )
}
