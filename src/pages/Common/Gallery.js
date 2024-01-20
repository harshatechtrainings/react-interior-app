import React from 'react';

const Gallery = (props) => {
    const { id, img, alt } = props.images;
    return (
        <React.Fragment>
            <img src={img} alt={alt} />
        </React.Fragment>
    );
}

export default Gallery;
