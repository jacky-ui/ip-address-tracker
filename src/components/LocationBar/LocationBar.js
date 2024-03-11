import LocationInfo from '../LocationInfo/LocationInfo';
import './LocationBar.scss';

function LocationBar({ addressInfo }) {
    return(
            <section className='locationBar'>
                <LocationInfo 
                    key={addressInfo.ip}
                    classProp='padding-border-right'
                    title='IP ADDRESS'
                    locationInfo={addressInfo.ip}
                />
                <LocationInfo 
                    key={addressInfo.location.region}
                    classProp='padding-border-middle'
                    title='LOCATION'
                    locationInfo={`${addressInfo.location.region}, ${addressInfo.location.city}`}
                />  
                <LocationInfo 
                    key={addressInfo.location.timezone}
                    classProp='padding-border-middle'
                    title='TIMEZONE'
                    locationInfo={addressInfo.location.timezone}
                />  
                <LocationInfo 
                    key={addressInfo.isp}
                    classProp='padding-all'
                    title='ISP'
                    locationInfo={addressInfo.isp}
                />                                             
                                         
            </section>
    )
};

export default LocationBar;