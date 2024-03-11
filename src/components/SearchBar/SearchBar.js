import './SearchBar.scss';

function SearchBar({ submitFunction }) {
    const handleSubmitErrors = ((e) => {
        e.preventDefault();
        if(!e.target.ip_address.value) {
            console.log('please enter something')
        } else console.log(e.target.ip_address.value)
    });

    return(
        <>
            <form className='form' onSubmit={handleSubmitErrors}>
                <label htmlFor='ip_address'/>
                <input className='form__input' name='ip_address' type='text' placeholder='Search for any IP address or domain'/>
                <button className='form__button' type='submit' />
            </form>
        </>
    )
};

export default SearchBar;