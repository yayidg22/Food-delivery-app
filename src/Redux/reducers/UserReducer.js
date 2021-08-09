import { UPDATECART } from "../actions/UserActions";

const UserReducer = (state = {},action) => {
    switch (action.type){
        case "UPDATE_CART":
            return {
                ...state,
                cartItems : action.payload
            };
            default: return state;
    }
}
export default UserReducer;