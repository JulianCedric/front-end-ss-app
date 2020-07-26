// 7/25 - JP Notes: Replaced 'a href' with import { Link } from 'react-router-dom', which allows for <Link to=.. />. 

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/sessions">New Session</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Navbar; 