import './LocationInfo.scss';

function LocationInfo({ title, locationInfo, classProp }) {
    return(
        <div className={classProp}>
            <h2 className='locationBar__title'>{title}</h2>
            <p className='locationBar__text'>{locationInfo}</p>
        </div>
    )
};

export default LocationInfo;