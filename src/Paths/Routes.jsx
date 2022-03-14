import React from "react";
import { Switch, Route } from 'react-router-dom';
import path from "./Path";

import Home from "../components/Pages/HomePage/Home";
import Products from "../components/Pages/ProductPage/Products";
import Aboutus from "../components/Pages/AboutusPage/Aboutus";

const Routes = () => {
    return (
        <Switch>
            <Route path={path.home.route} exact>
                <Home />
            </Route>
            <Route path={path.products.route} exact>
                <Products />
            </Route>
            <Route path={path.aboutus.route} exact>
                <Aboutus />
            </Route>
        </Switch>
    );
}

export default Routes;