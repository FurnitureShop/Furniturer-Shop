import React from "react";
import "./Products.scss"

import FilterPanel from "./Filters/FilterPanel";
import ProductList from "../../Product/ProductList";

const Products = () => {
    return (
        <div>
            <main className="products furniturer-container">
                <section className="products__filters">
                    <FilterPanel />
                </section>

                <div className="products__productslist">
                    <ProductList
                        sm={"sm:grid-cols-2"}
                        lg={""}
                        xl={"xl:grid-cols-3"} />
                </div>
            </main>
        </div>
    );
}

export default Products;