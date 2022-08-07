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
      alias: "alias-test",
      url: "url-test",
      address: "123 avenue",
    });
    console.log("adding event", props.results);
  };

  return (
    <li>
      {props && (
        <div>
          <p>{props.results.name}</p>
          <p>
            Rating: {props.results.rating} ({props.results.review} reviews)
          </p>
          <img
            src={props.results.image_url}
            alt=""
            height="150px"
            width="150px"
          />
          <button onClick={addMarker}>Add</button>
        </div>
      )}
    </li>
  );
};
