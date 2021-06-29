import React, { Component } from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="navbar" >
                <ul className="flex">
                    <Router>
                        <Link to="/" >
                            <li className="f5 underlineStyles">Home</li>
                        </Link>
                        <Link to="/about">
                            <li className="f5 underlineStyles">About</li>
                        </Link>
                        <Link to="/events">
                            <li className="f5 underlineStyles">Events</li>
                        </Link>
                        <Link to="/achievements">
                            <li className="f5 underlineStyles">Achievements</li>
                        </Link>
                        <Link to="/robocon">
                            <li className="f5 underlineStyles">Robocon</li>
                        </Link>
                    </Router>
                </ul>
            </div>
        );
    }
}

export default Navbar;