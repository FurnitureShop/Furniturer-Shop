import React, { useState, useEffect } from 'react'

import ProductItem from './ProductItem/ProductItem';
import { productsData as data } from './ProductsData';
//import { Row, Col } from 'antd';


const productsList = Object.values(data.product)


const ProductList = (props) => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(productsList)
    }, [])


    return (
        <div className={`productlist grid grid-cols-1 
                            ${props.sm} ${props.lg} ${props.xl}
                            gap-x-6 gap-y-12`}>
            {products.map((product) =>
                <ProductItem
                    id={product._id}
                    name={product.name}
                    price={product.price}
                    imgUrl={product.image}
                    category={product.category}
                />)}

        </div>
    )
}

export default ProductList;