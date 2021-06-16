import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsList from './Product'
import {fetchProducts, setProducts, } from '../../redux/actions/productAction'
import axios from 'axios'
import { useEffect } from 'react'
const Products = () => {
    const products = useSelector((state) => state);
    // for setProduct in redux store by dispatch
    const dispatch = useDispatch();
    // const fetchProducts = async()=>{
    //     const response = await axios 
    //     .get("https://fakestoreapi.com/products")
    //     .catch((err)=>{
    //         console.log("err", err);
    //     })
    //     dispatch(setProducts(response.data));
    // }
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])
    console.log(products);
    return (
        <div className="md:flex flex-wrap content-between">
            <ProductsList />
        </div>
    )
}

export default Products
