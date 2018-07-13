import types from "./types";

const addToCart = (item) => {
    return {
        type: types.ADD_TO_CART,
        payload: item
    }
}

export default {

    addToCart
    
}