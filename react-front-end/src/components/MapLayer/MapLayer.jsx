import React, { useContext, useEffect } from 'react'
import { LayerGroup, Marker } from 'react-leaflet';
import { AppContext } from '../hooks/useAppContext';

export const MapLayer = () => {
  
    const { events } = useContext(AppContext);
  
      useEffect(() => {
      console.log("rendering map", events);
    }, [events]);    
     
    return (
      <LayerGroup>
        {events.map((ele) => {
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
