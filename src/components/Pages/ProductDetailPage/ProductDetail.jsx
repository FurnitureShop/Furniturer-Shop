import React from "react";
import "./ProductDetail.scss"
import ProductDetailHolder from "./DetailHolder/ProductDetailHolder";

const ProductDetail = () => {
    
    return (
        <div className="furniturer-container">
            <h1>This is a product detail page</h1>
            <div>
                <ProductDetailHolder />
            </div>
        </div>
    )
}

export default ProductDetail