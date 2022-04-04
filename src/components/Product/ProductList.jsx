import React from 'react'

import ProductItem from './ProductItem/ProductItem';
//import { Row, Col } from 'antd';

const ProductList = () => {
    return (
        <div className="productlist grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProductItem />
        </div>
    )
}

export default ProductList;