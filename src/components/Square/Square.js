// stateless Square component

import React from 'react';
import './Square.css';

const Square = (props) => {
    return (
        <img src={props.imgsrc} onClick={props.onClick} className='img-responsive img-center square' alt={props.imgsrc} />
    );
};

export default Square;