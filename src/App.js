import "./App.less";
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutePaths from "./Paths/Routes";
//import MainLayout from 'components/MainLayout';
import "./App.scss";
import LocalStorageService from "services/LocalStorage";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  useEffect(() => {
    return () => {
      LocalStorageService.clearToken("auth");
      LocalStorageService.clearToken("refresh");
    };
  });
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AUB4X1GoVsxKeN6iiCzHxQmt5EPGX_1PVJLep-CP325v4jXNxXvtjvZ16gGdITnC_dvVR89Exb4Bz8LL",
        components: "buttons",
        currency: "USD",
      }}
    >
      <BrowserRouter>
        <RoutePaths />
      </BrowserRouter>
    </PayPalScriptProvider>
  );
}

export default App;
