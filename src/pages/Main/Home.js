import React from 'react';
import Navbar from '../Common/Navbar';
import Main from '../Components/Main';
import Footer from './Footer';
import DyanamicFormD from '../Components/DyanamicFormD';
function Home() {
    return (
        <div className="App">
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default Home;
