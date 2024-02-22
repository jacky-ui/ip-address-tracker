import './SearchBar.scss';
import submitArrow from '../../assets/images/icon-arrow.svg';

function SearchBar() {
    return(
        <>
            <form className='form'>
                <label htmlFor='ip_address'/>
                <input className='form__input' name='ip_address' type='text' placeholder='Search for any IP address or domain'/>
                <button className='form__button' type='submit' />
            </form>
        </>
    )
};

export default SearchBar;