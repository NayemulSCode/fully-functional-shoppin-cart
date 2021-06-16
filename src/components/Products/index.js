import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsList from './Product'
import {fetchProducts } from '../../redux/actions/productAction'
import { useEffect } from 'react'
const Products = () => {
    const products = useSelector((state) => state);
    // for setProduct in redux store by dispatch
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());
    },[fetchProducts])
    console.log(products);
    return (
        <div className="md:flex flex-wrap content-between">
            <ProductsList />
        </div>
    )
}

export default Products
