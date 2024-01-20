import React, { useEffect,useContext } from 'react';
import { useState } from 'react';
import { ScreenSize } from './ScreenSize';
import ToggleIcons from './ToggleIcons';
import BrandLogo from '../Components/BrandLogo';

const Navbar = () => {


    const screenSize = ScreenSize();
    const [logoTrue, setLogoTrue] = useState(true);

    const handlelogo = () => {
        if (screenSize.width < 780) {
            setLogoTrue(false);
        }
        else {
            setLogoTrue(true);
        }
       
    }

    useEffect(() => {
       
            handlelogo();
        
    }, [screenSize]);



    return (
        <div className='Navbar-div'>
            <header>
                {logoTrue ?
                    (
                    <React.Fragment>
                        <BrandLogo />
                            
                    </React.Fragment>
                    )
                    :<React.Fragment>
                        <ToggleIcons/>
                    </React.Fragment>
                }
            </header>
        </div>
    );
}

export default Navbar;
