import React, { useContext } from "react";
import { AppContext } from "../hooks/useAppContext";
import { ListPlans } from "../ListPlans/ListPlans";
import { NewPlan } from "../NewPlan/NewPlan";
import "./ListEvents.css"

export const ListEvents = () => {
  const { events, changeIconColor, deleteFromMap } =
    useContext(AppContext);

  return (
    <div className="list">
      <NewPlan />
      <ListPlans />

      <p>
        {events.length > 0 ? (
          <>
          </>
        ) : (
          <h4>You don't have anything planned yet =/</h4>
        )}
      </p>

      <ol>
        {events.map((item) => {
          return (
            <div className="events" key={item.id}>
              <li key={item.id}>
                <a href={item.image} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
                  {item.done === false ? (
                  <i
                    className="fa-solid fa-check"
                    onClick={() => changeIconColor(item.id)}
                    style={{"padding-left": "10px"}}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-clock-rotate-left"
                    onClick={() => changeIconColor(item.id)}
                    style={{"padding-left": "10px"}}
                  ></i>
                )}
                <i
                  className="fa-solid fa-trash"
                  onClick={() => deleteFromMap(item.id)}
                  style={{"padding-left": "10px"}}
                ></i>
                
                <p>{item.address}</p>
              
                <p>
                  <img src={item.image_url} alt="" height="150px" width="150px" />
                  {/* {item.done === false ? (
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
                ></i> */}
                </p>
              
                {/* <button onClick={() => changeIconColor(item.id)}>{item.done === false ? <>Done</> : <>Uncheck</>}</button> */}
                {/* <button onClick={() => deleteFromMap(item.id)}>Delete</button> */}
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
};
