import React from "react";
import Review from "./Review";
import { reviews } from "../../config/ReviewData";

const Reviews = () => {
    

    return (
        <div className="reviews-page">
            <h2>Customer Reviews</h2>
            {reviews.map((review, index) => (
                <Review
                    key={index}
                    image={review.image}
                    name={review.name}
                    comment={review.comment}
                    date={review.date}
                />
            ))}
        </div>
    );
};

export default Reviews;