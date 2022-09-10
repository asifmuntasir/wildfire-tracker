import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {
    return (
        <div className='map'>
            <GoogleMapReact
                // bootstrapURLKeys={{ key: 'AIzaSyAhbbrhp2yMJY2yb-nnUwosQ1fsQZIi494' }}
                bootstrapURLKeys={{ key: 'AIzaSyBea-jG4hI3PNPr99niTD0jwtB3wzxMyiE' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >

            </GoogleMapReact>
        </div>
    );
};

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

// Map.defaultPorps = {
//     center: {
//         lat: 24.894802,
//         lng: 91.869034
//     },
//     zoom: 10
// }

export default Map;