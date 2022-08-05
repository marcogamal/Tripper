import React, { useContext } from 'react'
import { AppContext } from '../hooks/useAppContext'

export const ListEvents = () => {
  
  const { events } = useContext(AppContext);
  
  return (
    <div>
      {events.length > 0 && <h4>My Plan</h4>}
      <ul>
        {
          events.map((item) => {
            return (
              <div>
                <h5>{item.name}</h5>
                <p></p>
              </div>
          )
          })
        }
      </ul>      
    </div>
  )
}
