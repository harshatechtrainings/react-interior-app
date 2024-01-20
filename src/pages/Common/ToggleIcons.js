import React,{useState} from 'react';
import NavListul from '../Components/NavList';
const ToggleIcons = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };


    return (
        <React.Fragment>
            <nav className={isNavOpen ? 'open' : 'close'}>
                <div className="toggle-btn" onClick={toggleNav}>
                    <div className="toggle-icon"></div>
                    <div className="toggle-icon"></div>
                    <div className="toggle-icon"></div>
                </div>
                <NavListul />
            </nav>
        </React.Fragment>
    );
}

export default ToggleIcons;
