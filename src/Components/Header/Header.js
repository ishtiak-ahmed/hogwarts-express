import React, { useContext } from 'react';
import logoWhite from '../../images/logo-white.png'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <header>
            <Link to='/'>

                <div className="logo">
                    <img src={logoWhite} alt="" />
                </div>
            </Link>
            <nav className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/destination'>Destination</Link>
                <Link to='/blog'>Blog</Link>
                {
                    loggedInUser.displayName ? <Link>{loggedInUser.displayName}</Link> :
                        <Link to='/login'>Login</Link>
                }
            </nav>
        </header>
    );
};

export default Header;