import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';

function Header() {
    return(
        <header className='header'>
            <h1 className='header__title'>IP ADDRESS TRACKER</h1>
            <SearchBar />
        </header>
    )
};

export default Header;