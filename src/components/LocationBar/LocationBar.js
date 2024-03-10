import LocationInfo from '../LocationInfo/LocationInfo';
import './LocationBar.scss';

function LocationBar({ addressInfo }) {
    // let checkForClass = (propInfo) => {
    //     let paddingClass = ''
    //     if(propInfo === 'IP ADDRESS') {
    //         return paddingClass = 'padding-border-right';
    //     } else if(propInfo === 'TIMEZONE' || propInfo === 'LOCATION') {
    //         return paddingClass = 'padding-border-middle';
    //     } else return paddingClass = 'padding-all';
    // } ;

    return(
        <>
            <section className='locationBar'>
                <LocationInfo 
                    key={addressInfo.ip}
                    classFunction='padding-border-right'
                    title='IP ADDRESS'
                    locationInfo={addressInfo.ip}
                />
                <LocationInfo 
                    key={addressInfo.location.region}
                    classFunction='padding-border-middle'
                    title='LOCATION'
                    locationInfo={`${addressInfo.location.region}, ${addressInfo.location.city}`}
                />  
                <LocationInfo 
                    key={addressInfo.location.timezone}
                    classFunction='padding-border-middle'
                    title='TIMEZONE'
                    locationInfo={addressInfo.location.timezone}
                />  
                <LocationInfo 
                    key={addressInfo.isp}
                    classFunction='padding-border-all'
                    title='ISP'
                    locationInfo={addressInfo.isp}
                />                                             
                {/*} {locationDefault.map((location) => (
                //     <LocationInfo
                //         classFunction={checkForClass} 
                //         title={location.title}
                //         locationInfo={location.locationInfo}
                //         key={location.title}
                //     />
                // ))} */}                                          
            </section>
        </>
    )
};

export default LocationBar;