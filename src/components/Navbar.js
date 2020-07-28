// 7/25 - JP Notes: Replaced 'a href' with import { Link } from 'react-router-dom', which allows for <Link to=.. />. 

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <div className="navbar">
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About</Link>
            {/* <Link to="/sessions/" className="link">All Sessions</Link> */}
            <Link to="/sessions/new" className="link">New Session</Link>
            <Link to="/login" className="link">Login</Link>
        </div>
    )
}

export default Navbar; 