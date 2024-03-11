import React, { useEffect, useMemo } from "react";
import { Marker, useMap, Popup } from "react-leaflet";
import Icon from '../Icon/Icon';

export default function MapMarker({ latLong }) {
    const map = useMap();
    const position = useMemo(() => [latLong.location.lat, latLong.location.lng], [latLong.location.lat, latLong.location.lng])

    useEffect(() => {
        map.flyTo([position[0], position[1]], 13, {
            animate: true
        })
    }, [map, position]);

    return(
        <Marker icon={Icon} position={[position[0], position[1]]}>
            <Popup>
                You are here.
            </Popup>
        </Marker>
    );
};