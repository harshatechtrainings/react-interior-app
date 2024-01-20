import React from 'react';
// CSS file for styling

const FlowCard = (props) => {
    const { id, img, icon,title, description } = props.data;
    return (
        <div className="card" key={id}>
            <div className="card-icon"><img src={img} alt='img' /></div>
            <div className="card-content">
                {icon}
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default FlowCard;
