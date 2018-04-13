// stateless Header component

import React from 'react';
import './Header.css';

const Header = () => {
    return <nav className="navbar navbar-light bg-danger">
        <a className="heading" href="/">
          <img src="images/header.png" width="50px" height="50px" alt="headerimg"/>
          &nbsp;&nbsp;&nbsp; Clicky Game &nbsp;&nbsp;&nbsp;
          <img src="images/header.png" width="50px" height="50px" alt="headerimg" />
        </a>
      </nav>;
};

export default Header;