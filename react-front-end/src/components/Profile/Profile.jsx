import React, { useContext } from "react";
import { AppContext } from "../hooks/useAppContext";
import { ListPlans } from "../ListPlans/ListPlans";
import "./Profile.css";

export const Profile = () => {
  const { events, changeIconColor, onOffRoutes, deleteFromMap } =
    useContext(AppContext);
  return (
    <div className="wrapper-profile">
      <div className="profile">
        <h2>My Plans</h2>

        <div className="profile1">
          <ul>
            <div>
              <ol>
                {events.map((item) => {
                  return (
                    <li key={item.id}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                      {/* <p>{item.name}</p> */}
                      <p>{item.address}</p>
                      <button onClick={() => changeIconColor(item.id)}>
                        {item.done === false ? <>Done</> : <>Uncheck</>}
                      </button>
                      <button onClick={() => deleteFromMap(item.id)}>
                        Delete
                      </button>
                      <p></p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </ul>
        </div>

        <div className="profile1">
          <ul>
            <div>
              <ol>
                {events.map((item) => {
                  return (
                    <li key={item.id}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                      {/* <p>{item.name}</p> */}
                      <p>{item.address}</p>
                      <button onClick={() => changeIconColor(item.id)}>
                        {item.done === false ? <>Done</> : <>Uncheck</>}
                      </button>
                      <button onClick={() => deleteFromMap(item.id)}>
                        Delete
                      </button>
                      <p></p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
