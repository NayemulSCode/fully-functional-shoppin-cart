import fakestoreapi from "../../api/fakeStoreApi";
import { ActionType } from "../contants/actionTypes"

export const fetchProducts = () =>{
    return async function (dispatch, getState){
        const response = await fakestoreapi.get("/products")
        dispatch({
            type: ActionType.FETCH_PRODUCTS,
            payload: response.data,
        })
    }
};

export const setProducts =(products) =>{
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products,
    }
};

export const selectedProduct = (product)=>{
    return{
        type: ActionType.SELECTED_PRODUCT,
        payload: product,
    }
};
export const removeSelectedProduct = ()=>{
    return{
        type: ActionType.REMOVE_SELECTED_PRODUCT,
    }
};