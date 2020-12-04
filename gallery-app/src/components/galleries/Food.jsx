import React from 'react';
import images from './FoodImages';
import './Galleries.css';

const Food = props => {
    return (
        <div className="Galleries container">
            {images.map((image, index) => (
                <img className="col-4 col-md-4 col-sm-12" src={image} key={index} alt="" />
            ))}
        </div>
    );
}

export default Food;