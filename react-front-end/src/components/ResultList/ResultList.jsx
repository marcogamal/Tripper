import React from 'react'
import { ListItem } from '../ListItem/ListItem'

export const ResultList = (props) => {

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
         )
        })
      }
    </ul>
  )
}
