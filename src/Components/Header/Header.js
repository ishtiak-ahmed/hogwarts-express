import React from 'react';
import logoWhite from '../../images/logo-white.png'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/destination'>Destination</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </header>
    );
};

export default Header;