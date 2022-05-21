import React from "react";
import { Routes, Route } from 'react-router-dom';
import path from "./Path";

import Home from "../components/Pages/HomePage/Home";
import Products from "../components/Pages/ProductPage/Products";
import Aboutus from "../components/Pages/AboutusPage/Aboutus";
import User from "../components/Pages/UserPage/Page/User";
import ProductDetail from "components/Pages/ProductDetailPage/ProductDetail";
import Cart from "components/Pages/CartPage/Cart";


const RoutePaths = () => {
    return (
        <Routes>
            <Route path={path.home.route} element={<Home />} exact />
            <Route path={path.products.route} element={<Products />} exact/>
            <Route path="/products/:id" element={<ProductDetail />} exact/>
            <Route path={path.aboutus.route} element={<Aboutus />} exact/>
            <Route path={path.user.route} element={<User />} />
            <Route path={path.cart.route} element={<Cart />} />
        </Routes>
    );
}

export default RoutePaths;