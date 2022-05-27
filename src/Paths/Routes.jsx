import React from "react";
import { Routes, Route } from 'react-router-dom';
import path from "./Path";

import Home from "../components/Pages/HomePage/Home";
import Products from "../components/Pages/ProductPage/Products";
import Aboutus from "../components/Pages/AboutusPage/Aboutus";
import User from "../components/Pages/UserPage/Page/User";
import ProductDetail from "components/Pages/ProductDetailPage/ProductDetail";
import { AuthLayout } from "components/Pages/AuthPage/AuthLayout";
import MainLayout from "components/MainLayout";
import Cart from "components/Pages/CartPage/Cart";
import LoginTab from "components/Pages/AuthPage/Login/LoginTab";


const RoutePaths = () => {
    return (
        <Routes>
            <Route path={path.home.route} element={
                <MainLayout>
                    <Home />
                </MainLayout>

            } exact />
            <Route path={path.products.route} element={
                <MainLayout>
                    <Products />
                </MainLayout>
            } exact />
            <Route path="/products/:id" element={
                <MainLayout>
                    <ProductDetail />
                </MainLayout>
            } exact />
            <Route path={path.aboutus.route} element={<Aboutus />} exact />
            <Route path={path.login.route} element={
                <AuthLayout>
                    <LoginTab />
                </AuthLayout>
            } exact />
            <Route path={path.user.route} element={
                <MainLayout>
                    <User />
                </MainLayout>
            } />
            <Route path={path.cart.route} element={
                <MainLayout>
                    <Cart />
                </MainLayout>} />
        </Routes>
    );
}

export default RoutePaths;