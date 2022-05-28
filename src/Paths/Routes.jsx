import React from "react";
import { Routes, Route } from 'react-router-dom';
import path from "./Path";

import Home from "../components/Pages/HomePage/Home";
import Products from "../components/Pages/ProductPage/Products";
import Aboutus from "../components/Pages/AboutusPage/Aboutus";
import User from "../components/Pages/UserPage/Page/User";
<<<<<<< Updated upstream
=======
import ProductDetail from "components/Pages/ProductDetailPage/ProductDetail";
import AuthLayout from "components/Pages/AuthPage/AuthLayout";
import MainLayout from "components/MainLayout";
import Cart from "components/Pages/CartPage/Cart";
import LoginTab from "components/Pages/AuthPage/Login/LoginTab";
import RegisterTab from "components/Pages/AuthPage/Register/RegisterTab";

>>>>>>> Stashed changes

const RoutePaths = () => {
    return (
        <Routes>
            <Route path={path.home.route} element={<Home />} exact />
            <Route path={path.products.route} element={<Products />} exact/>
            <Route path={path.aboutus.route} element={<Aboutus />} exact/>
            <Route path={path.user.route} element={<User />} />
        </Routes>
    );
}

export default RoutePaths;