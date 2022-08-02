import React from 'react'
import { ListItem } from '../ListItem/ListItem'

export const ResultList = (props) => {
  const {results} = props
  console.log("result from ResultList", results)
  return (
    <ul>
      {
        // console.log("props:", props.result)
        // <ListItem name="test"/>
        results.map((item) => {
          return (
            <ListItem 
              key = {item.id}
              name = {item.name}
              rating = {item.rating}
              review = {item.review}
              addFunc = {props.addFunc}
              latitude = {item.latitude}
              longitude = {item.longitude}
              events = {props.events}
            /> 
          )
        })
      }
    </ul>
  )
}
