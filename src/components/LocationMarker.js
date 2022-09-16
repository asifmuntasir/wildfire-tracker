import React from 'react';
import {
    Marker,
    Popup
} from 'react-leaflet';
import L from 'leaflet';


const markerIcon = new L.icon({
    iconUrl: require('../assets/fire.png'),
    iconSize: [30, 30],
})

const LocationMarker = ({ lat, lng, locationID, title }) => {

    const center = {
        lat,
        lng
    }

    return (
        <Marker
            position={center}
            icon={markerIcon}>
            <Popup className='popupContent'>
                <h2 className='popupHead'>Event Location Info</h2>
                <ul className='popupText'>
                    <li>ID: <strong>{locationID}</strong></li>
                    <li>TITLE: <strong>{title}</strong></li>
                </ul>
            </Popup>
        </Marker>
    );
};

export default LocationMarker;