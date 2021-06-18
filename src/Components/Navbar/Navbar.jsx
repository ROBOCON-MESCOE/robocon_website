import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="flex">
                <li className="f5 underlineStyles">Home</li>
                <li className="f5 underlineStyles">About</li>
                <li className="f5 underlineStyles">Events</li>
                <li className="f5 underlineStyles">Achievements</li>
                <li className="f5 underlineStyles">Robocon</li>
            </ul>
        </div>
    );
}

export default Navbar;