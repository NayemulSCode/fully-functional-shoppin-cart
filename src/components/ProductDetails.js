import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProduct, removeSelectedProduct } from '../redux/actions/productAction';

const ProductDetails = () => {
    const product = useSelector(state => state.product)
    const {image, title, description, category, price} = product;
    const {productId} = useParams();
    console.log(product);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(productId && productId !== "") dispatch(fetchProduct(productId))
        dispatch(removeSelectedProduct())
    },[productId]);
    return (
        <div className="max-w-md mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-7xl">
            {Object.keys(product).length === 0? (
                <div>Loading...</div>
            ):(
                <div className="md:flex">
                <div className="md:flex-shrink-0">
                 <img className="w-full md:h-full md:w-80" src={image} alt={title} />
                </div>
                <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{category}</div>
                <a href="#" className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">{title}</a>
                <p className="mt-2 text-yellow-500 text-3xl">${price}</p>
                <p className="mt-2 text-gray-500">{description}</p>
                <button className="btn">Add to Cart</button>
                </div>
            </div> 
            )}
            
        </div>
    )
}

export default ProductDetails
