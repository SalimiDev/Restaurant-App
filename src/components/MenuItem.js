import React from 'react';

function MenuItem(props) {
    const { image, name, price } = props.data;
    return (
        <div className='menuItem'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1> {name} </h1>
            <p> ${price} </p>
        </div>
    );
}

export default MenuItem;
