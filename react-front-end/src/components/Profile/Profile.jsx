import React, { useContext } from "react";
import { AppContext } from "../hooks/useAppContext";
import { ListPlans } from "../ListPlans/ListPlans";

 
export const Profile = () => {
  const { events, changeIconColor, onOffRoutes, deleteFromMap } = useContext(AppContext);
  return (
    <div className="wrapper-profile">
      <h2>My Plans</h2>
      <div className="profile">
        <p> Plan 1</p>
        <ul>
        <div>
      <ol>
        {
          events.map((item) => {
            return (
              <li key={item.id}>
                <h5>{item.name}</h5>
                <button onClick={() => changeIconColor(item.id)}>{item.done === false ? <>Done</> : <>Uncheck</>}</button>
                <button onClick={() => deleteFromMap(item.id)}>Delete</button>
              </li>
          )
          })
        }
      </ol>      
    </div>
        </ul>
      </div>
    </div>
  );
};
