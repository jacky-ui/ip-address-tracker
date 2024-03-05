import { useState, useEffect } from 'react';
import LocationInfo from '../LocationInfo/LocationInfo';
import './LocationBar.scss';

function LocationBar() {
    const [ipAddress, setipAddress] = useState('192.212.174.101');
    const [location, setlocation] = useState('Brooklyn, NY 10001');
    const [timezone, settimezone] = useState('UTC -05:00');
    const [isp, setisp] = useState('SPACEX Starlink')    

    let locationDefault = [
        {
            title: 'IP ADDRESS',
            locationInfo: ipAddress
        },
        {
            title: 'LOCATION',
            locationInfo: location
        },
        {
            title: 'TIMEZONE',
            locationInfo: timezone
        },
        {
            title: 'ISP',
            locationInfo: isp
        },
    ]

    let checkForClass = (propInfo) => {
        let paddingClass = ''
        if(propInfo === 'IP ADDRESS') {
            return paddingClass = 'padding-border-right';
        } else if(propInfo === 'TIMEZONE' || propInfo === 'LOCATION') {
            return paddingClass = 'padding-border-middle';
        } else return paddingClass = 'padding-all';
    } ;

    return(
        <>
            <section className='locationBar'>
                {locationDefault.map((location) => (
                    <LocationInfo
                        classFunction={checkForClass} 
                        title={location.title}
                        locationInfo={location.locationInfo}
                        key={location.title}
                    />
                ))}                                            
            </section>
        </>
    )
};

export default LocationBar;