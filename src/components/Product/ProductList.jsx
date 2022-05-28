import React from 'react'

import ProductItem from './ProductItem/ProductItem';
//import { Row, Col } from 'antd';

//
//THIS IS FOR TESTING ROUTING!!!!!!!
//
const productList = [
    {
        _id: 0, 
    },
    {
        _id: 1, 
    },
    {
        _id: 2, 
    },
    {
        _id: 3, 
    },
    {
        _id: 4, 
    },
    {
        _id: 5, 
    },
    
]

const ProductList = (props) => {


    return (
        <div className={`productlist grid grid-cols-1 
                            ${props.sm} ${props.lg} ${props.xl}
                            gap-x-6 gap-y-12`}>
            { productList.map((product) => <ProductItem id={product._id}/>)}
            
        </div>
    )
}

export default ProductList;