import types from './types';

import { combineReducers } from 'redux';

export const initialState = {
    plants: [
        {
            name: 'Aloe',
            price: '$15.99',
            img: '/aloe.jpg',
            type: 'low light'
        },
        {
            name: 'Orchid',
            price: '$21.99',
            img: '/orchid.jpg',
            type: 'full light'
        },
        {
            name: 'Fern',
            price: '$18.99',
            img: '/fern.jpg',
            type: 'medium light'
        },
        {
            name: 'Snake',
            price: '$18.99',
            img: '/snakeplant.jpg',
            type: 'low light'
        },
        {
            name: 'Fig Leaf',
            price: '$89.99',
            img: '/figleaf.jpg',
            type: 'full light'
        },
        {
            name: 'Jade',
            price: '$12.99',
            img: '/jade.jpg',
            type: 'medium light'
        },
        {
            name: 'Cactus',
            price: '$95.99',
            img: '/cactus.jpg',
            type: 'cannot kill'
        },
        {
            name: 'String of Pearl',
            price: '$18.99',
            img: '/stringofpearls.jpg',
            type: 'medium light'
        }
    ],
    cart: []
}

const plants = (state = initialState.plants, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

const cart = (state = initialState.cart, action) => {
    switch (action.type) {
        
        case types.ADD_TO_CART:
        console.log(action.payload)
            return [...state, action.payload]

        default:
            return state;
    }
}

const reducer = combineReducers( {

    cart,
    plants

} );

export default reducer;