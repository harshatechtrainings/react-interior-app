import React from 'react';

const Review= ({ image, name, comment, date }) => {
    return (
        <div className="review-card">
            <div className="review-card-image">
                <img src={image} alt="Reviewer" />
            </div>
            <div className="review-card-content">
                <h3>{name}</h3>
                <p>{comment}</p>
                <small>{date}</small>
            </div>
        </div>
    );
};
export default Review;