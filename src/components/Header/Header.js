// stateless Header component

import React from 'react';
import './Header.css';

const Header = () => {
    return (
    <nav className="navbar navbar-light bg-danger">
        <a className="heading" href="/">
            CLICKY GAME
        </a>
    </nav>
    );
};

export default Header;