import React from 'react';
import { Link } from 'react-router-dom';

const NavListul = () => {
    return (
        <React.Fragment>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/calculator">Estimation</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </React.Fragment>
    );
}

export default NavListul;
