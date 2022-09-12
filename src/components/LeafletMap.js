import React from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';
import L from 'leaflet';

const center = {
    lat: 24.9082,
    lng: 91.8678,
}

const markerIcon = new L.icon({
    iconUrl: require("../assets/fire.png"),
    iconSize: [30, 30],
})

const LeafletMap = () => {
    return (
        <div className='map'>
            <MapContainer style={{ height: '100%' }} center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center} icon={markerIcon}>
                    <Popup>
                        Amberkhana, Sylhet.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};


export default LeafletMap;