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
            <Route path={path.aboutus.route} element={<AuthLayout />} exact />
            <Route path={path.user.route} element={
                <MainLayout>
                    <User />
                </MainLayout>
            } />
        </Routes>
    );
}

export default RoutePaths;