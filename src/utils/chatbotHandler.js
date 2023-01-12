import { store } from "../store";
import {
	addProductToCart,
	createOrder,
	decreaseProductFromCart,
	displayCart,
	fetchMoreProduct,
	fetchProductFirstTime,
	saveAddress,
	saveName,
	savePhone,
} from "store/chatbotSlice";

export default function chatbotHandleMessage(event, { navigate }) {
	const handlerMapping = {
		iAdvisory: iAdvisoryHandler,
		"iAdvisory - yes": iAdvisoryFetchMoreHandler,
		iNavigateProduct: iNavigateProductHandler,
		iCart: iAddCartHandler,
		iNavigateCommand: iNavigateCommandHandler,
		iCheckout: iCheckoutHandler,
		"iCheckout - increaseQuantity": iAddCartHandler,
		"iCheckout - decreaseQuantity": iDecreaseQuantityHandler,
		"iCheckout - yes - name": iCheckoutSaveName,
		"iCheckout - yes - name - address": iCheckoutSaveAddress,
		"iCheckout - yes - name - address - phone": iCheckoutSavePhone,
	};
	const chatbotResponse = event?.detail?.response?.queryResult;

	if (
		typeof handlerMapping[chatbotResponse?.intent?.displayName] === "function"
	) {
		handlerMapping[chatbotResponse?.intent?.displayName](chatbotResponse, {
			navigate,
		});
	}
}

const iAdvisoryHandler = (chatbotResponse) => {
	const parameters = chatbotResponse.parameters;
	if (parameters.top && parameters.top !== "" && parameters.top.length !== 0) {
		store.dispatch(fetchProductFirstTime(parameters.top));
	} else {
		store.dispatch(fetchProductFirstTime());
	}
};

const iAdvisoryFetchMoreHandler = (chatbotResponse) => {
	const parameters = chatbotResponse.parameters;
	if (parameters.top && parameters.top !== "" && parameters.top.length !== 0) {
		store.dispatch(fetchMoreProduct(parameters.top));
	} else {
		store.dispatch(fetchMoreProduct());
	}
};

const iNavigateProductHandler = (chatbotResponse, { navigate }) => {
	const id = chatbotResponse.fulfillmentMessages[1].payload?.id;
	navigate("products/" + id);
};

const iAddCartHandler = (chatbotResponse) => {
	const id = chatbotResponse.fulfillmentMessages[1].payload?.id;
	store.dispatch(addProductToCart(id));
};

const iDecreaseQuantityHandler = (chatbotResponse) => {
	const id = chatbotResponse.fulfillmentMessages[1].payload?.id;
	store.dispatch(decreaseProductFromCart(id));
};

const iNavigateCommandHandler = (chatbotResponse, { navigate }) => {
	const page = chatbotResponse.parameters.page;
	if(page === "home") navigate("/");
	else navigate(page);
};

const iCheckoutHandler = (chatbotResponse) => {
	store.dispatch(displayCart());
}

const iCheckoutSaveName = (chatbotResponse) => {
	const name = chatbotResponse.queryText;
	store.dispatch(saveName(name))
}

const iCheckoutSaveAddress = (chatbotResponse) => {
	const address = chatbotResponse.queryText;
	store.dispatch(saveAddress(address))
}

const iCheckoutSavePhone = (chatbotResponse) => {
	const phone = chatbotResponse.queryText;
	store.dispatch(savePhone(phone))
	store.dispatch(createOrder())
}
