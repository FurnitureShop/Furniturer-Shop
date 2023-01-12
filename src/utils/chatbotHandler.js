import { store } from "../store";
import {
	addProductToCart,
	fetchMoreProduct,
	fetchProductFirstTime,
} from "store/chatbotSlice";



export default function chatbotHandleMessage(event, {navigate}) {
	const handlerMapping = {
		iAdvisory: iAdvisoryHandler,
		// eslint-disable-next-line
		["iAdvisory - yes"]: iAdvisoryFetchMoreHandler,
		iNavigateProduct: iNavigateProductHandler,
		iCart: iCartHandler,
	};
	const chatbotResponse = event?.detail?.response?.queryResult;
	if (
		typeof handlerMapping[chatbotResponse?.intent?.displayName] === "function"
	) {
		handlerMapping[chatbotResponse?.intent?.displayName](chatbotResponse, {navigate});
	}
}

const iAdvisoryHandler = (chatbotResponse) => {
	const parameters = chatbotResponse.parameters;
	if (parameters.top !== "" && parameters.top.length !== 0) {
		store.dispatch(fetchProductFirstTime(parameters.top));
	} else {
		store.dispatch(fetchProductFirstTime());
	}
};

const iAdvisoryFetchMoreHandler = (chatbotResponse) => {
	const parameters = chatbotResponse.parameters;
	if (parameters.top !== "" && parameters.top.length !== 0) {
		store.dispatch(fetchMoreProduct(parameters.top));
	} else {
		store.dispatch(fetchMoreProduct());
	}
};

const iNavigateProductHandler = (chatbotResponse, {navigate}) => {
	const id = chatbotResponse.fulfillmentMessages[1].payload?.id;
	navigate("products/" + id);
};
const iCartHandler = (chatbotResponse) => {
	const id = chatbotResponse.fulfillmentMessages[1].payload?.id;
	console.log("CALL API");
	store.dispatch(addProductToCart(id));
	console.log(store.getState().chatbot.cart);
};
