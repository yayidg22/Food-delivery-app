export const UPDATECART = "UPDATE_CART";

export const updateCart = cartItems => {
    return{
        type:UPDATECART,
        payload:cartItems
    }
}   