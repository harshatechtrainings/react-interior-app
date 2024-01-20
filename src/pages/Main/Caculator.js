import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from './Footer';
import DyanamicFormD from '../Components/DyanamicFormD';
function Calculator() {
    return (
        <div className="App">
            <Navbar />
            <DyanamicFormD />
            <Footer />
        </div>
    );
}

export default Calculator;
