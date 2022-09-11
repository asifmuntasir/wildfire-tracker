import React from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';
import LocationMarker from './LocationMarker';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const center = {
    lat: 24.9082,
    lng: 91.8678,
}

const LeafletMap = () => {
    return (
        <div className='map'>
            <MapContainer style={{ height: '100%' }} center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <LeafletCanvasMarker /> */}
                {/* <LocationMarker lat={center.lat} lng={center.lng} /> */}
                <Marker position={center}>
                    <Popup>
                        Amberkhana, Sylhet.
                    </Popup>
                </Marker>
                {/* <div className='location_marker'>
                    <Icon center={center} icon={locationIcon} className='location-icon' />
                </div> */}
            </MapContainer>
        </div>
    );
};


export default LeafletMap;