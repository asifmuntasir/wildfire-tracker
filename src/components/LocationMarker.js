import React from 'react';
import {
    Marker,
    Popup,
} from 'react-leaflet';
import L from 'leaflet';


const markerIcon = new L.icon({
    iconUrl: require('../assets/fire.png'),
    iconSize: [30, 30],
})

const LocationMarker = ({ lat, lng, onClick }) => {

    const center = {
        lat,
        lng
    }

    return (
        <Marker position={center} icon={markerIcon}>
            <Popup>
                Amberkhana, Sylhet.
            </Popup>
        </Marker>
    );
};

export default LocationMarker;