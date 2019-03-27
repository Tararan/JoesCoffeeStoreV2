import { CART } from './constants';

export const setCartValue = (text) => {
    type: CART,
    payload: text
}