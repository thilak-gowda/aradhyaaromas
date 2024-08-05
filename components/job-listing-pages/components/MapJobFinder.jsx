
'use client'
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({ center, zoom }) {
  return (
    // Important! Always set the container height explicitly
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBEtiMO9qnE-uXLcoQ6c2gZ0Uwe0pibQEk' }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      <AnyReactComponent lat={center.lat} lng={center.lng} text="My Marker" />
    </GoogleMapReact>
  );
}
