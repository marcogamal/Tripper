import React, { useContext } from "react";
import { AppContext } from "../hooks/useAppContext";
import { ListPlans } from "../ListPlans/ListPlans";

export const ListEvents = () => {
  const { events, changeIconColor, onOffRoutes, deleteFromMap } = useContext(AppContext);
  
  return (
    <div>
      {events.length > 0 ? <><h4>My Plan:</h4><button onClick={() => onOffRoutes()}>Routes</button></> : <h4>You don't have anything planned yet =/</h4>}
      {/* //List of plans for the specific user. Events would have to be loaded according to each plan */}
      <ListPlans />
      <ol>
        {
          events.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.image} target="_blank" rel="noopener noreferrer">
                  <h5>{item.name}</h5>
                </a>
                <button onClick={() => changeIconColor(item.id)}>{item.done === false ? <>Done</> : <>Uncheck</>}</button>
                <button onClick={() => deleteFromMap(item.id)}>Delete</button>
              </li>
          )
          })
        }
      </ol>      
    </div>
  );
};
