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
  
  // const [icon, setIcon] = useState(blueIcon);

  // const changeIconColor = (icon) => {
  //   if (icon.options.iconUrl === greenIcon.options.iconUrl) {
  //     setIcon((current) => (current = blueIcon));
  //   } else {
  //     setIcon((current) => (current = greenIcon));
  //   }
  // };

  //Create boolean inside events for "done". If it is done then greenIcon or blueIcon


  useEffect(() => {
  console.log("rendering map", events);

  }, [events]);


     
  return (
    <LayerGroup>
      
      {events.map((ele) => {
        return (
          <>
            {ele.done ?
              <Marker 
              key={ele.id}
              position={[ele.latitude, ele.longitude]}
              icon={greenIcon}>
                <Popup>
                  {ele.name}
                  <br/>
                  <br/>
                  <button onClick={() => deleteFromMap(ele.id)}>Delete</button>
                  <button onClick={() => changeIconColor(ele.id)}>Uncheck</button>
                </Popup>
              </Marker>             
            :
              <Marker 
                key={ele.id}
                position={[ele.latitude, ele.longitude]}
                icon={blueIcon}>
                  <Popup>
                    {ele.name}
                    <br/>
                    <br/>
                    <button onClick={() => deleteFromMap(ele.id)}>Delete</button>
                    <button onClick={() => changeIconColor(ele.id)}>Done</button>
                  </Popup>
              </Marker>   
            }
          </>
        );
      })}
    </LayerGroup>
  );
}
