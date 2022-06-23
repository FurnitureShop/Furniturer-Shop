import React from "react";
import "./ProductDetail.scss";
import ProductDetailHolder from "./DetailHolder/ProductDetailHolder";
// import { useParams } from "react-router-dom";

const ProductDetail = () => {
  return (
    <div className="furniturer-container">
      <div>
        <ProductDetailHolder />
      </div>
    </div>
  );
};

export default ProductDetail;
