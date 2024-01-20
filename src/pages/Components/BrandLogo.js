import React from 'react';
import NavListul from './NavList';
import Logo from '../Common/Logo';
const BrandLogo = () => {
    return (
        <React.Fragment>
            <nav className="logo-box">
                <Logo/>
                <NavListul />
            </nav>
        </React.Fragment>
    );
}

export default BrandLogo;
