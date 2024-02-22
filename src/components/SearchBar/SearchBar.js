import './SearchBar.scss';

function SearchBar() {
    return(
        <>
            <form className='form'>
                <label htmlFor='ip_address'/>
                <input name='ip_address' type='text' placeholder='Search for any IP address or domain'/>
                <button className='form__button' type='submit' />
            </form>
        </>
    )
};

export default SearchBar;