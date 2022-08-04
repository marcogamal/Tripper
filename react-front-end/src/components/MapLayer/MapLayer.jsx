import React, { useContext, useEffect, useState } from 'react'
import { LayerGroup, Marker } from 'react-leaflet';
import { AppContext } from '../hooks/useAppContext';

export const MapLayer = () => {
  
  const { events } = useContext(AppContext);
  const [markers, setMarkers] = useState([]);
  
      useEffect(() => {
      console.log("rendering map", events);
      setMarkers(events);
    }, [events]);    
     
    return (
      <LayerGroup>
        
        {markers.map((ele) => {
          return (
            <Marker 
              key={ele.id}
              position={[ele.latitude, ele.longitude]}>
            </Marker>
          );
        })}
      </LayerGroup>
    );
}
