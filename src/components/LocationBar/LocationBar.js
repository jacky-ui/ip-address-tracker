import LocationInfo from '../LocationInfo/LocationInfo';
import './LocationBar.scss';

function LocationBar({ locationDefault }) {
    console.log(locationDefault)
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