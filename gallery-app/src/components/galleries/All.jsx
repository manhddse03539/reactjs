import React from 'react';
import images from './AllImages';
import './Galleries.css';

const All = props => {
    return (
        <div className="Galleries container">
            {images.map((image, index) => (
                <img className="col-4 col-md-4 col-sm-12" src={image} key={index} alt="" />
            ))}
        </div>
    );
}

export default All;