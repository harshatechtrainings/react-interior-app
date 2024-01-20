import React from 'react';
import HeroSection from '../Common/HeroSection';
import ServicesSection from '../Common/ServicesSection';
import Portfolio from '../Common/Portfolio';
import About from '../Common/About';
import ContactForm from '../Common/ContactForm';
import FlowProcess from './FlowProcess';
import Benifits from './Benifits';

const Main = () => {
    return (
        <div>
            <main>
                <HeroSection />
                <Benifits />
                <Portfolio />
                <FlowProcess />
                {/* <About/>
                <ContactForm /> */}
            </main>
        </div>
    );
}

export default Main;
