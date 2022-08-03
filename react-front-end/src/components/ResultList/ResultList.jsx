import React, { useContext } from 'react'
import { AppContext } from '../hooks/useAppContext'
import { ListItem } from '../ListItem/ListItem'

export const ResultList = (props) => {

  const { results, addToMap } = useContext(AppContext);

  return (
    <ul>
      {
        // console.log("props:", props.result)
        props.results.map((item) => {
          return (
            <ListItem 
              key = {item.id}
              results={item}
            /> 
            // <li>
            //   {item && 
            //     <>
            //       <p>{item.name}</p>
            //       <p>Rating: {item.rating} ({item.review} reviews)</p>
            //       <button onClick={addToMap(item.latitude, item.longitude)}>Add</button>
            //     </>      
            //   }
            // </li>
          )
        })
      }
    </ul>
  )
}
