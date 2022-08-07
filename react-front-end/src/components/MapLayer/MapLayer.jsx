import React, { useContext, useEffect, useState } from 'react'
import { LayerGroup, Marker, Popup } from 'react-leaflet';
import * as L from "leaflet";
import { AppContext } from '../hooks/useAppContext';

export const MapLayer = () => {
  
  const { events, deleteFromMap, changeIconColor } = useContext(AppContext);
  const LeafIcon = L.Icon.extend({
    options: {}
  });

  const blueIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
  }),
  greenIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
  });

  useEffect(() => {
  console.log("rendering map", events);

  }, [events]);
     
  return (
    <LayerGroup>
      
      {events.map((ele) => {
        return (
          <>
              <Marker 
              key={ele.id}
              position={[ele.latitude, ele.longitude]}
              icon={ele.done ? greenIcon : blueIcon}>
                <Popup>
                  {ele.name}
                  <br/>
                  <br/>
                  <button onClick={() => deleteFromMap(ele.id)}>Delete</button>
                  <button onClick={() => changeIconColor(ele.id)}>{ele.done ? <>Uncheck</> : <>Done</>}</button>
                </Popup>
              </Marker>             
          </>
        );
      })}
    </LayerGroup>
  );
}
