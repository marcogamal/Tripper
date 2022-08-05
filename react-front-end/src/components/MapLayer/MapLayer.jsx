import React, { useContext, useEffect } from 'react'
import { LayerGroup, Marker, Popup } from 'react-leaflet';
import { AppContext } from '../hooks/useAppContext';

export const MapLayer = () => {
  
  const { events, deleteFromMap } = useContext(AppContext);
    
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
              <Popup>
                {ele.name}
                <br/>
                <br/>
                <button onClick={() => deleteFromMap(ele.id)}>Delete</button>
              </Popup>
          </Marker>
        );
      })}
    </LayerGroup>
  );
}
