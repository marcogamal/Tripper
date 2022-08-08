import React, { useContext, useEffect } from "react";
import { LayerGroup, Marker, Popup, useMap } from "react-leaflet";
import * as L from "leaflet";
import { AppContext } from "../hooks/useAppContext";
import MapRouting from "../MapRouting";

export const MapLayer = () => {
  const { events, deleteFromMap, changeIconColor, showRoutes } =
    useContext(AppContext);
  const LeafIcon = L.Icon.extend({
    options: {},
  });
  const blueIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
    }),
    greenIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
    });

  const map = useMap();

  useEffect(() => {
    console.log("rendering map", events);
  }, [events]);

  return (
    <LayerGroup>
      {events.map((ele) => {
        return (
          <div key={ele.id}>
            <Marker
              key={ele.id}
              position={[ele.latitude, ele.longitude]}
              icon={ele.done ? greenIcon : blueIcon}
            >
              <Popup>
                {ele.name}
                <br />
                <br />
                <button onClick={() => deleteFromMap(ele.id)}>Delete</button>
                <button onClick={() => changeIconColor(ele.id)}>
                  {ele.done ? <>Uncheck</> : <>Done</>}
                </button>
              </Popup>
            </Marker>
          </div>
        );
      })}
      {showRoutes && <MapRouting map={map} />}
    </LayerGroup>
  );
};
