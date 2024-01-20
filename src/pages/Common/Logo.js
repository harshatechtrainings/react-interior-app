import React from 'react';
import brandlogo from '../../assets/images/NOBG-LOGO.png';
const Logo = () => {
    return (
        <React.Fragment>
            <div className='logo-sub-box'>
                <img src={brandlogo} alt="logo" />
            </div>
        </React.Fragment>
    );
}

export default Logo;
