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
              key = {item.id}
              name = {item.name}
              rating = {item.rating}
              review = {item.review}
              latitude = {item.latitude}
              longitude = {item.longitude}
              addFunc = {props.addFunc}
              events = {props.events}
            /> 
          )
        })
      }
    </ul>
  )
}
