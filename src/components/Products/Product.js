import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductsList = () => {
    const products = useSelector((state) => state.allProduct.products)
    const listOfProduct = products.map(product =>{
        const {id, title, image, category,price} = product;
        return (
            <div key={id} className="max-w-md mx-auto my-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className=" ">
                    <div className="md:flex-shrink-0">
                        <Link to={`/product/${id}`}>
                            <img className=" h-48 w-full object-cover md:h-full md:w-48 mx-auto" src={image} alt= {title}/>
                        </Link>
                        <div className="p-5">
                        <Link to={`/product/${id}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</Link>
                        <p className="mt-2 text-yellow-500">${price}</p>
                        <p className="mt-2 text-gray-500">{category}</p>
                        </div>
                    </div>
                </div>
        </div>
        )
    })
    console.log(products);
    return (
        <>{listOfProduct}</>
    )
}

export default ProductsList
