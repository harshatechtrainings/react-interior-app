import React from 'react';
import BenifitsCard from '../Common/BenifitsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faExchangeAlt, faCommentDollar, faBook, faPlay, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import BenifitsData from '../../config/BenifitsData';
import QuoteSection from '../Common/QuoteSection';

const Benifits = () => {
    return (
        <div className='benifits'>
            <QuoteSection />
            <div className="benifit-card-container">
                {BenifitsData.map((item) => (
                    <BenifitsCard data={item} />
                ))}

            </div>
        </div>
    );
};

export default Benifits;
