import { CART } from './constants';

const initalState = {
    cart: []
}

export const addToCart = ( state = initialState, action = {}) => {
    switch (action.type) {
        case CART: 
            return Object.assign({}, state, { cart: action.payload })
        default:
            return state;
    }
}