import React from 'react';
import config from '../../config/properties'

const HeroSection = () => {
    return (
        <div>
            <section className="hero">
                <h1>{config.heroSectionHeader}</h1>
                <p>{config.heroSectionParagraph}</p>
                {/* <a href={config.heroSectionhref} className="cta-button">{config.heroSectionAtext}</a> */}
            </section>
        </div>
    );
}

export default HeroSection;
