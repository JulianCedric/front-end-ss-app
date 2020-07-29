import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <div className="navbar">
            <Link to="/" className="link">Home</Link>
            <Link to="/sessions" className="link">Sessions</Link>
            <Link to="/sessions/new" className="link">New Session</Link>
            <Link to="/login" className="link" >Login</Link>
        </div>
    )
}

export default Navbar; 