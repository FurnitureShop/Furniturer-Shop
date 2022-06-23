import React from "react";

import ProductItem from "./ProductItem/ProductItem";
//import { Row, Col } from 'antd';

const ProductList = ({ products, ...props }) => {
  return (
    <div
      className={`productlist grid grid-cols-1 
                            ${props.sm} ${props.lg} ${props.xl}
                            gap-x-6 gap-y-12`}
    >
      {products?.map((product, index) => (
        <ProductItem
          key={index}
          id={product._id}
          name={product.name}
          price={product.price}
          imgUrl={product.image}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ProductList;
