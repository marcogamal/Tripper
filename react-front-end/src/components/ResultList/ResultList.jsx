import React, { useContext, useEffect } from 'react'
import { AppContext } from '../hooks/useAppContext'
import { ListItem } from '../ListItem/ListItem'

export const ResultList = () => {

  const { results } = useContext(AppContext);

  useEffect(() => {

  },[results])

  return (
    <div className="results-wrapper">
      {results.length > 0 && <h3 style={{"margin-left": "40px","fontFamily":"Copperplate", "font-size":"25px"}}>Results:</h3>}
      <ul style={{"list-style": "none"}}>
        {
          // console.log("props:", props.result)
          results.map((item) => {
            return (
              <ListItem 
                key = {item.id}
                results={item}
              /> 
          )
          })
        }
      </ul>
    </div>
  )
}
