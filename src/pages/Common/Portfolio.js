import React from 'react';
import GalleryData from '../../config/GalleryData';
import Gallery from '../Common/Gallery';

const Portfolio = () => {
    return (
        <React.Fragment>
            <section className="portfolio">
                <h2>Our Portfolio</h2>
                <div className="gallery">
                {GalleryData.map((data) => (
                    <Gallery images={data} />
                ))}
                </div>
            </section>
        </React.Fragment>
    );
}

export default Portfolio;
