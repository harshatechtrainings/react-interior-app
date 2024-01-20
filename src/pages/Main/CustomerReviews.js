import React from 'react';
import Reviews from '../Common/Reviews';
import Navbar from '../Common/Navbar';
import Footer from './Footer';

const CustomerReviews = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Reviews />
            <Footer />
        </React.Fragment>
    );
}

export default CustomerReviews;
