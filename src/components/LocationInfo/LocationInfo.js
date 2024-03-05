import './LocationInfo.scss';

function LocationInfo({ title, locationInfo, classFunction }) {
    return(
        <>
            <div className={classFunction(title)}>
                <h2 className='locationBar__title'>{title}</h2>
                <p className='locationBar__text'>{locationInfo}</p>
            </div>
        </>
    )
};

export default LocationInfo;