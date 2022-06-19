import React, { useState } from "react";
import "./ProductDetail.scss";
import ProductDetailHolder from "./DetailHolder/ProductDetailHolder";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  //use this to route to the specific product with id
  let { id } = useParams();
  // const [productData, setProductData] = useState({})

  return (
    <div className="furniturer-container">
      <div>
        <ProductDetailHolder />
      </div>
    </div>
  );
};

export default ProductDetail;
