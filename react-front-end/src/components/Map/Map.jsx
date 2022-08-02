import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { MapLayer } from '../MapLayer/MapLayer';

export const Map = ({ markers, addMarkers}) => {

  // const defaultMarkers = props.markers;
  // const [markers, setMarkers] = useState(defaultMarkers);

  return (
    <MapContainer center={[43.64446719365264, -79.38649706503828]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    {/* {markers.map(ele => (
      <Marker 
        id={ele.id}
        position={[ele.latitude, ele.longitude]}>
      </Marker>
    ))} */}

      <MapLayer markers={markers} addMarkers={addMarkers}/>


    </MapContainer>
  )
}
