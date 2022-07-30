import React from 'react'
import { ListItem } from '../ListItem/ListItem'

export const ResultList = (props) => {
  return (
    <ul>
      {
        // console.log("props:", props.result)
        // <ListItem name="test"/>
        props.results.map((item) => {
          return (
            <ListItem 
              name = {item.name}
              rating = {item.rating}
              review = {item.review}
            /> 
          )
        })
      }
    </ul>
  )
}
