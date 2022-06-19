/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./ProductItem.scss";

const ProductItem = ({ id, name, price, imgUrl, category }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="product">
      <div className="product__thumbnail" onClick={handleNavigation}>
        <img
          className="product__thumbnail-image"
          src={imgUrl}
          alt="thumbnail"
        />
        <div className="product__thumbnail-overlay">
          <div className="product__thumbnail-overlay-addcart">
            <a className="furniturer-link text--italic">Read more</a>
          </div>
        </div>
      </div>

      <div className="product__content">
        <div className="product__content__info">
          <h5 className="product__content__info-name">{name}</h5>
          <div className="product__content__info-category">
            {category.map((item, index) => (
              <span key={index}>
                {index === 0 ? "" : ", "}
                <a
                  onClick={() => {
                    navigate(`/products?category=${item}`);
                  }}
                >
                  {item}
                </a>
              </span>
            ))}
          </div>
        </div>
        <div className="product__content__price">${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductItem;
