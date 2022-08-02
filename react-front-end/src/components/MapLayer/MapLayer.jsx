import React, { useCallback, useEffect, useState } from 'react'
import { LayerGroup, Marker, useMap } from 'react-leaflet';

export const MapLayer = ({ markers, addMarkers}) => {
  
    // const defaultMarkers = props.defaultMarkers;
    // const [markers, setMarkers] = useState(defaultMarkers);
    const map = useMap();
  
    const addMarker = useCallback((e) => {
      const newMarker = {
        latitude: e.latlng.lat,
        longitude: e.latlng.lng,
      };
      addMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    }, []);

  
    useEffect(() => {
      // map.on('click',addMarker)
      addMarkers(markers);  
      console.log("markers", markers);
    }, [addMarker]);
    
     
    return (
      <LayerGroup>
        {markers.map((ele) => {
          return (
            <Marker 
              id={ele.id}
              position={[ele.latitude, ele.longitude]}>
            </Marker>
          );
        })}
      </LayerGroup>
    );
}
