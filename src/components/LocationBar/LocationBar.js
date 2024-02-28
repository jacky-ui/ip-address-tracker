import './LocationBar.scss';

function LocationBar() {
    return(
        <>
            <section className='locationBar'>
                <div className='padding-border-right'>
                    <h2 className='locationBar__title'>IP ADDRESS</h2>
                    <p className='locationBar__text'>192.212.174.101</p>
                </div>
                <div className='padding-border-middle'>
                    <h2 className='locationBar__title'>LOCATION</h2>
                    <p className='locationBar__text'>Brooklyn, NY 10001</p>
                </div>
                <div className='padding-border-middle'>
                    <h2 className='locationBar__title'>TIMEZONE</h2>
                    <p className='locationBar__text'>UTC -05:00</p>
                </div>
                <div className='padding-all'>
                    <h2 className='locationBar__title'>ISP</h2>
                    <p className='locationBar__text'>SPACEX Starlink</p>
                </div>                                                
            </section>
        </>
    )
};

export default LocationBar;