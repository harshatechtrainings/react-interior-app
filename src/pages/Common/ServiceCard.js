import React from 'react';

const ServiceCard = (props) => {
    const {id,img,alt,title,description} = props.data;

    return (
        <React.Fragment>    
                <div key = {id} className="service-card">
                    <img src={img} alt={alt} />
                    <h3>{title}</h3>
                    <p>{ description}</p>
                </div>  
        </React.Fragment>
    );
}

export default ServiceCard;
