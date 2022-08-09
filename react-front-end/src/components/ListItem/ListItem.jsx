import React, { useContext } from "react";
import { AppContext } from "../hooks/useAppContext";

export const ListItem = (props) => {
  const { addToMap } = useContext(AppContext);

  // Add marker
  const addMarker = () => {
    addToMap({
      id: props.results.id,
      name: props.results.name,
      lat: props.results.latitude,
      lng: props.results.longitude,
      done: false,
      alias: props.results.alias,
      url: props.results.url,
      address: "123 avenue",
    });
    console.log("adding event", props.results);
  };

  return (
    <li>
      {props && (
        <div>
          <a href={props.results.url} target="_blank" rel="noopener noreferrer">{props.results.name}</a>
          <p>
            Rating: {props.results.rating} ({props.results.review} reviews)
          </p>
          <a href={props.results.url} target="_blank" rel="noopener noreferrer">
            <img
              src={props.results.image_url}
              alt=""
              height="150px"
              width="150px"
            />
          </a>
          <button onClick={addMarker}>Add</button>
        </div>
      )}
    </li>
  );
};
