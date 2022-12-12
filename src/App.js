import "./App.less";
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutePaths from "./Paths/Routes";
//import MainLayout from 'components/MainLayout';
import "./App.scss";
import LocalStorageService from "services/LocalStorage";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { IMAGES } from "./assets/images";

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
				<df-messenger
					intent="WELCOME"
					chat-title="Furniturer shop"
					chat-icon={IMAGES.logo}
					agent-id="9917ee40-d9df-4117-8e97-b1affcc6a5cf"
					language-code="en"
				></df-messenger>
			</BrowserRouter>
		</PayPalScriptProvider>
	);
}

export default App;
