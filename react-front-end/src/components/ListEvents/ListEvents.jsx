import React, { useContext } from "react";
import { AppContext } from "../hooks/useAppContext";
import { ListPlans } from "../ListPlans/ListPlans";
import { NewPlan } from "../NewPlan/NewPlan";
import "./ListEvents"

export const ListEvents = () => {
  const { events, changeIconColor, onOffRoutes, deleteFromMap } =
    useContext(AppContext);

  return (
    <div className="list">
      <NewPlan />
      <ListPlans />
      <p>
      {events.length > 0 ? (
        <>
          <b>My Plan:</b>
          <i
            className="fa-solid fa-map-location-dot fa-2x"
            onClick={() => onOffRoutes()}
          ></i>
        </>
      ) : (
        <h4>You don't have anything planned yet =/</h4>
      )}
      </p>
      {/* //List of plans for the specific user. Events would have to be loaded according to each plan */}
      <ol>
        {events.map((item) => {
          return (
            <div className="events">
            <li key={item.id}>
              <a href={item.image} target="_blank" rel="noopener noreferrer">
                <p>{item.name}</p>
              </a>
              <p>{item.address}</p>
            
              <p>
                <img src={item.image_url} alt="" height="150px" width="150px" />
              </p>
              {item.done === false ? (
                <i
                  className="fa-solid fa-check fa-2x"
                  onClick={() => changeIconColor(item.id)}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-clock-rotate-left fa-2x"
                  onClick={() => changeIconColor(item.id)}
                ></i>
              )}
              <i
                className="fa-solid fa-trash fa-2x"
                onClick={() => deleteFromMap(item.id)}
              ></i>
              {/* <button onClick={() => changeIconColor(item.id)}>{item.done === false ? <>Done</> : <>Uncheck</>}</button> */}
              {/* <button onClick={() => deleteFromMap(item.id)}>Delete</button> */}
            </li></div>
          );
        })}
      </ol>
    </div>
  );
};
