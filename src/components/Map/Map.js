// Leaflet imports
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import './Map.scss';
import MapMarker from '../MapMarker/MapMarker';

function Map({ latLong }) {
    return(
        <section className='map'>
            <MapContainer 
                center={[latLong.location.lat, latLong.location.lng]} 
                zoom={13} 
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapMarker 
                    latLong={latLong}
                />
            </MapContainer>
        </section>
    )
};

export default Map;