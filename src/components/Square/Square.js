// stateless Square component

import React from 'react';
import './Square.css';

const Square = (props) => {
    return (
        <img src={props.imgsrc} className='img-responsive img-center' alt='image' />
    );
};

export default Square;