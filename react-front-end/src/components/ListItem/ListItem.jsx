import React from 'react'

export const ListItem = (props) => {

  //TODO: include button to Add event to map (save to DB)

  return (
    <li>
      {props && 
        <>
          <p>{props.name}</p>
          <p>Rating: {props.rating} ({props.review} reviews)</p>
          <button>Add</button>
        </>      
      }
    </li>
  )
}
