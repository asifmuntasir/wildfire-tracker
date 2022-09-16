import React from 'react';
import {
    MapContainer,
    TileLayer
} from 'react-leaflet';
import LocationMarker from './LocationMarker';

// const center = {
//     lat: 24.9082,
//     lng: 91.8678,
// }

const center = {
    lat: 42.3265,
    lng: -122.8756
}

const NATURAL_EVENT_WILDFIRE = 8;

const LeafletMap = ({ eventData }) => {

    const markers = eventData.map(ev => {
        if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
            return <LocationMarker key={ev.id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} locationID={ev.id} title={ev.title} />
        }
        return null
    })


    return (
        <div className='map'>
            <MapContainer style={{ height: '100%' }} center={center} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {markers}
            </MapContainer>
        </div>
    );
};


export default LeafletMap;