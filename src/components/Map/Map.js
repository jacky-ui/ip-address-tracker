// Leaflet imports
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import Icon from '../Icon/Icon';

import './Map.scss';

function Map({ lat, long }) {
    return(
        <section className='map'>
            <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={Icon} position={[lat, long]}>
                    <Popup>
                        You are here.
                    </Popup>
                </Marker>
            </MapContainer>
        </section>
    )
};

export default Map;