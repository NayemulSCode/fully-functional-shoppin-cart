import fakestoreapi from "../../api/fakeStoreApi";
import { ActionType } from "../contants/actionTypes"

// fetching data form server
export const fetchProducts = () => async (dispatch) =>{
    const response = await fakestoreapi.get("/products")
    dispatch({
        type: ActionType.FETCH_PRODUCTS,
        payload: response.data,
    })  
};
// fetching product details for specific id
export const fetchProduct = (id) => async (dispatch) =>{
    const response = await fakestoreapi.get(`/products/${id}`)
    dispatch({
        type: ActionType.SELECTED_PRODUCT,
        payload: response.data,
    })  
};

export const setProducts =(products) =>{
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products,
    }
};

export const removeSelectedProduct = ()=>{
    return{
        type: ActionType.REMOVE_SELECTED_PRODUCT,
    }
};