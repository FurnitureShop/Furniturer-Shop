import React from "react";
import "./LastestItems.scss";

import ProductList from "../../../Product/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, selectProduct } from "store/productSlice";
import { useEffect } from "react";

const LastestItems = () => {
  const products = useSelector(selectProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(getAllProduct());
    }
  }, [products]);

  return (
    <section className="lastestitems furniturer-container">
      <div className="lastestitems__header">
        <p>Lastest Collections</p>
        <h2>Essential Items</h2>
      </div>
      <div className="lastestitems__product">
        <ProductList
          products={products}
          sm={"sm:grid-cols-2"}
          lg={"lg:grid-cols-3"}
          xl={""}
        />
      </div>
    </section>
  );
};

export default LastestItems;
