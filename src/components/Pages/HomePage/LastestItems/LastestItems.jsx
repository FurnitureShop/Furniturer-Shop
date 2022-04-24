import React from "react";
import "./LastestItems.scss"

import ProductList from "../../../Product/ProductList";

const LastestItems = () => {
    return (
        <section className="lastestitems furniturer-container">
            <div className="lastestitems__header">
                <p>Lastest Collections</p>
                <h2>Essential Items</h2>
            </div>
            <div className="lastestitems__product">
                <ProductList />
            </div>
        </section>
    )
}

export default LastestItems;