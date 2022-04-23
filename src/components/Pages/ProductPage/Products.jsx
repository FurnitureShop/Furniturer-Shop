import React from "react";
import "./Products.scss"

import FilterPanel from "./Filters/FilterPanel";
import ProductList from "../../Product/ProductList";

const Products = () => {
    return (
        <div>
            <main className="products furniturer-container">
                <section>
                    <FilterPanel />
                </section>

                <div>
                    <ProductList />
                </div>
            </main>
        </div>
    );
}

export default Products;