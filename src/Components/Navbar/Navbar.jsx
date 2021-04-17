import React from 'react';
import './Navbar.css';

const Navbar  = () => {
    return(
        <div className="navbar">
            <ul className="flex">
                <li className="f4">Home</li>
                <li className="f4">About Us</li>
                <li className="f4">Events</li>
                <li className="f4">Achievements</li>
                <li className="f4">Robocon</li>
            </ul>
        </div>
    );
}

export default Navbar;