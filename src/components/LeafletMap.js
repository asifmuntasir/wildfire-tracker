import React from 'react';
import {
    MapContainer,
    TileLayer,
    useMap,
} from 'react-leaflet';
import LeafletCanvasMarker from './LeafletCanvasMarker';

const LeafletMap = () => {
    return (
        <div className='map'>
            <MapContainer style={{ height: '100%' }} center={[24.894802, 91.869034]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
                <LeafletCanvasMarker />
            </MapContainer>
        </div>
    );
};

export default LeafletMap;