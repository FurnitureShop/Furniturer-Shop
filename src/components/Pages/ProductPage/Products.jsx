import React from "react";
import "./Products.scss"

import FilterPanel from "./Filters/FilterPanel";
import ProductList from "../../Product/ProductList";
import { Pagination } from "antd";
import { Outlet, Route, Routes } from "react-router-dom";
import ProductDetail from "../ProductDetailPage/ProductDetail";

const Products = () => {

    return (
        <div>
            <main className="products furniturer-container">
                <section className="products--filters">
                    <FilterPanel />
                </section>

                <div className="products--lists">
                    <ProductList
                        sm={"sm:grid-cols-2"}
                        lg={""}
                        xl={"xl:grid-cols-3"} />

                    <Pagination
                        className="products--lists__pagination"
                        total={10}
                        pageSize={1} />
                </div>
            </main>
        </div>
    );
}

export default Products;