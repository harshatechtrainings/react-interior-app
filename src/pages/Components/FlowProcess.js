import React from 'react';
import FlowCard from '../Common/FlowCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faExchangeAlt, faCommentDollar, faBook, faPlay, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import FlowCardData from '../../config/FlowCardData';

const FlowProcess = () => {
    return (
        <div className='flow-process'>
            <h1>Steps</h1>
            <div className="card-container">
                {FlowCardData.map((item) => (
                    <FlowCard data={item} />
                ))}
                
            </div>
        </div>
    );
};

export default FlowProcess;
