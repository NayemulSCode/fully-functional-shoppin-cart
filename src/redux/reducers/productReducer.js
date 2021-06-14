import { ActionType } from "../contants/actionTypes";
const initialState = {
    products: [
        {
            id:1,
            title: 'Nayemul',
            category: 'Developer'
        }
    ]
};

export const productReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return state;  
        default:
            return state;
    }
}