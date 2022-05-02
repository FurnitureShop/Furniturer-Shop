import React from 'react'

import ProductItem from './ProductItem/ProductItem';
//import { Row, Col } from 'antd';

const ProductList = (props) => {


    return (
        <div className={`productlist grid grid-cols-1 
                            ${props.sm} ${props.lg} ${props.xl}
                            gap-x-6 gap-y-12`}>
            <ProductItem />
            
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    )
}

export default ProductList;