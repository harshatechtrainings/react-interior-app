import React from 'react';
import ServiceCard from './ServiceCard';
import ServiceData from '../../config/ServiceData';

const ServicesSection = () => {
        
    return (
        <div>
            <section className="services">
                <h2>Our Services</h2>
                <div className='services-main'>
                    {ServiceData.map((item) => (
                    <ServiceCard data={item} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ServicesSection;
