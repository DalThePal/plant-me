import types from './types';

import { combineReducers } from 'redux';

export const initialState = {
    plants: [
        {
            name: 'Aloe',
            price: '$15.99',
            img: '/aloe.jpg'
        },
        {
            name: 'Orchid',
            price: '$21.99',
            img: '/orchid.jpg'
        },
        {
            name: 'Fern',
            price: '$18.99',
            img: '/fern.jpg'
        },
        {
            name: 'Snake',
            price: '$18.99',
            img: '/snakeplant.jpg'
        },
        {
            name: 'Fig Leaf',
            price: '$89.99',
            img: '/figleaf.jpg'
        },
        {
            name: 'Jade',
            price: '$12.99',
            img: '/jade.jpg'
        },
        {
            name: 'Cactus',
            price: '$95.99',
            img: '/cactus.jpg'
        },
        {
            name: 'String of Pearl',
            price: '$18.99',
            img: '/stringofpearls.jpg'
        }
    ]
}

const plants = (state = initialState.plants, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

const reducer = combineReducers( {

    plants

} );

export default reducer;