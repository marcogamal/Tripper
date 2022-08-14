import React, { useContext } from "react";
import { AppContext } from "../hooks/useAppContext";

export const ListItem = (props) => {
  const { addToMap, selectedPlan } = useContext(AppContext);

  // Add marker
  const addMarker = () => {
    addToMap({
      id: `${props.results.id}plan${selectedPlan}`,
      name: props.results.name,
      lat: props.results.latitude,
      lng: props.results.longitude,
      done: false,
      alias: props.results.alias,
      url: props.results.url,
      address: props.results.address,
      image_url: props.results.image_url,
    });
    console.log("adding event", props.results);
  };

  return (
    <li>
      {props && (
        <div>
          <a href={props.results.url} target="_blank" rel="noopener noreferrer">{props.results.name}</a>
          <p>{props.results.address}</p>
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
          {/* <button onClick={addMarker}>Add</button> */}
          {/* <i className="fa-regular fa-location-plus" onClick={addMarker}></i> */}
          <i className="fa-regular fa-2x fa-square-plus" onClick={addMarker}></i>
        </div>
      )}
    </li>
  );
};
