import React from 'react';
// CSS file for styling

const BenifitsCard = (props) => {
    const { id, img, icon, title, description } = props.data;
    return (
        <div className="card" key={id}>
            <div className="benifit-card-content">
                {icon}
                <h3 className="card-title">{title}</h3>
            </div>
        </div>
    );
};

export default BenifitsCard;
