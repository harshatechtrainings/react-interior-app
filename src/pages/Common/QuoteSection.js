import React from 'react';
import { Link } from 'react-router-dom';

const QuoteSection = () => {
    return (
        <div className='quotesection'>
            <p>Avail all the below services free now<Link to="/contact" className="quotebutton">Contact Us</Link></p>
        </div>
    );
}

export default QuoteSection;
