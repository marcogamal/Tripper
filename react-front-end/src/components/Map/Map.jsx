import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

export const Map = (props) => {

  return (
    <MapContainer center={[43.64446719365264, -79.38649706503828]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    {props.events.map(ele => (

      <Marker position={[ele.latitude, ele.longitude]}>
      </Marker>
      
    ))}

    </MapContainer>
  )
}
