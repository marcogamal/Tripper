import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { MapLayer } from '../MapLayer/MapLayer';

export const Map = () => {

  return (
    <MapContainer center={[43.64446719365264, -79.38649706503828]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapLayer />


    </MapContainer>
  )
}
