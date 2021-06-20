/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';


function Button({ label, handleOnClick, ...props }) {
    const {className} = {...props}

    return (
        <button onClick={handleOnClick} type="button" className={className}>{label}</button>
    )
}

export default Button;
