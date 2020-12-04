import React from 'react';
import images from './NatureImages';
import './Galleries.css';

const Nature = props => {
    return (
        <div className="Galleries container">
            {images.map((image, index) => (
                <img className="col-4 col-md-4 col-sm-12" src={image} key={index} alt="" />
            ))}
        </div>
    );
}

export default Nature;