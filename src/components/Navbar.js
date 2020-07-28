// 7/25 - JP Notes: Replaced 'a href' with import { Link } from 'react-router-dom', which allows for <Link to=.. />. 

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {

    const { changeView, view } = props;

    return (
        <div className="navbar">
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/sessions" className="link">Sessions</Link>
            <Link to="/sessions/new" className="link">New Session</Link>
            <Link to="/login" className="link" changeView={changeView} view={view}>Login</Link>
        </div>
    )
}

export default Navbar; 