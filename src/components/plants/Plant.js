import React from 'react';

export default function Plant(props) {
    return (
        <div className='Plant'>
            <img src={props.img} alt={props.name}/>
            <div className='productTag'>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
        </div>
    )
}