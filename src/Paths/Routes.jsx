import React from "react";
import Home from "../components/Pages/HomePage/Home";
import { Switch, Route } from 'react-router-dom';
import path from "./Path";

const Routes = () => {
    return (
        <Switch>
            <Route path={path.home.route}>
                <Home />
            </Route>
        </Switch>
    );
}

export default Routes;