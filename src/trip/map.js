import React from "react";
import { withGoogleMap, GoogleMap } from 'react-google-maps';

export default function map() {
    const GoogleMapExample = withGoogleMap(props => (

        <GoogleMap
    
          defaultCenter = { { lat: 40.712776, lng: -74.005974 } }
          defaultZoom = { 13 }
    
        >
    
        </GoogleMap>
    
     ));
  return (
    <div>
    <div class=" py-8 text-3xl font-semibold">
    <label>Location</label>
    </div>
    <div >
    <GoogleMapExample

      containerElement={ <div style={{ height: `600px`, width: '1000px' }} /> }

      mapElement={ <div style={{ height: `100%` }} /> }

    />
    </div>
  </div>
  )
}
