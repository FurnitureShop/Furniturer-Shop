/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form } from "antd";
import React from "react";
import "./ProductDetailHolder.scss";
import QuantityControl from "components/Controls/QuantityControl/QuantityControl";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, selectProduct } from "store/productSlice";
import { addToCart, getCart, selectUser } from "store/userSlice";
import { useEffect } from "react";

const ProductDetailHolder = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector(selectProduct);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (!products || products.length === 0) {
      const fetchData = async () => {
        await dispatch(getAllProduct());
        setProduct(products.find((product) => product["_id"] === id));
      };
      fetchData();
    } else setProduct(products.find((product) => product["_id"] === id));
  }, []);

  const navigate = useNavigate();
  const onClickAddToCart = () => {
    dispatch(
      addToCart({
        productID: id,
        quantity: quantity,
      })
    );
    dispatch(getCart());
  };

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (quantity) => {
    if (quantity > 0 && quantity <= product?.inStock) setQuantity(quantity);
  };

  return (
    <div className="productdetail">
      <div className="detail--thumbnail">
        <img
          className="detail--thumbnail__img"
          src={
            (product?.image && product?.image[0]) ||
            "https://phutungnhapkhauchinhhang.com/trangchu/default-thumbnail/"
          }
          alt="This is a thumbnail for product"
        />
      </div>

      <div className="detail--info flex flex-col gap-y-7">
        <div>
          <h1 className="detail--info__name">{product?.name}</h1>
          <p className="detail--info__price">${product?.price?.toFixed(2)}</p>
        </div>
        <div className="detail--info__description">
          <p>{product?.description}</p>
        </div>
        <p className="detail--info__material">Material: {product?.material}</p>
        <p className="detail--info__size">
          Size:{" "}
          {`${product?.size?.width} x ${product?.size?.height} x ${product?.size?.depth} ${product?.size?.unit}`}{" "}
        </p>
        <p className="detail--info__size">Instock: {product?.inStock}</p>

        <Form className="detail--info__add gap-x-6">
          <div>
            <QuantityControl
              value={quantity}
              onUpdate={updateQuantity}
              disable={
                quantity === 1 ? -1 : quantity === product?.inStock ? 1 : 0
              }
            />
          </div>

          <div className="detail--info__add-submit">
            <a onClick={onClickAddToCart}>
              <span>Add to cart</span>
            </a>
          </div>
        </Form>

        <div className="detail--info__tags">
          <span className="detail--info__tags-label">Categories: </span>
          <span className="detail--info__tags-tag">
            {product?.category?.map((item, index) => {
              return (
                <span key={index}>
                  {index !== 0 ? ", " : " "}
                  <a
                    onClick={() => {
                      navigate(`/products?category=${item}`);
                    }}
                  >
                    {item}
                  </a>
                </span>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHolder;
