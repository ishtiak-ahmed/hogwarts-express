import React from 'react';
import logoWhite from '../../images/logo-white.png'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <Link to='/'>Home</Link>
            <Link to='/destination'>Destination</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/login'>Login</Link>
        </nav>
    );
};

export default Header;