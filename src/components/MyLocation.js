import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
 width: '100vw',
 height: '100vh'
};

const center = {
 lat: 23.807151959639274,
 lng: 90.36868367458692,
};

function MyComponent() {
 return (
  <LoadScript
   googleMapsApiKey={"AIzaSyBKwKOCFehpcpl-IoFtaAB2pi_2ImbFE_I"}
  >
   <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={20}
   >
    <Marker
     position={center}
    />
   </GoogleMap>
  </LoadScript>
 )
}

export default React.memo(MyComponent)