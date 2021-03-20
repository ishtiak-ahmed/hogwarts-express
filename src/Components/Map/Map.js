import React from 'react';
// import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const Map = () => {
    const maps = () => {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                <Marker
                    position={{ lat: -34.397, lng: 150.644 }}
                />
            </GoogleMap>
        )
    }
    const wrappedMap = withScriptjs(withGoogleMap(maps))
    return (
        <div style={{ height: '60vh', width: '60vw' }}>
            <wrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'} loadingElement={<div style={{ height: '350px' }} />}
                containerElement={<div style={{ height: '350px' }} />}
                mapElement={<div style={{ height: '350px' }} />}></wrappedMap>

        </div>
    );
};

export default Map;