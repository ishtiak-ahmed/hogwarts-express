import React from 'react';
// import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const Map = () => {
    const maps = () => {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: 23.777176, lng: 90.399452 }}
            >
                <Marker
                    position={{ lat: 23.777176, lng: 90.399452 }}
                />
            </GoogleMap>
        )
    }
    const WrappedMap = withScriptjs(withGoogleMap(maps))
    return (
        <div style={{ height: '60vh', width: '60vw' }}>
            <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'} loadingElement={<div style={{ height: '480px' }} />}
                containerElement={<div style={{ height: '480px' }} />}
                mapElement={<div style={{ height: '480px' }} />}></WrappedMap>

        </div>
    );
};

export default Map;