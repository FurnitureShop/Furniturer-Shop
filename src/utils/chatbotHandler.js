import { ENP_TOP_PRODUCT } from "api/EndPoint";
import { axios } from "lib/axios/Interceptor";
import {
	repAfterDisplayProduct,
	repBeforeDisplayProduct,
} from "./chatbotResponses";
import { generateNum } from "./mathUtils";
import {store} from '../store'



export default function chatbotHandleMessage(event) {
	const chatbot = store.getState().chatbot.chatbot;
	const chatbotResponse = event?.detail?.response?.queryResult;
	switch (chatbotResponse?.intent?.displayName) {
		case "iAdvisory":
			iAdvisoryHandler(chatbotResponse, chatbot);
			break;
		default:
	}
}

const iAdvisoryHandler = (chatbotResponse, dfMessenger) => {
	const parameters = chatbotResponse.parameters;
	if (parameters.top !== "" && parameters.top.length !== 0) {
		getTopProductHandler(parameters.top).then((response) => {
			dfMessenger.renderCustomText(
				repBeforeDisplayProduct[generateNum(0, 2)](``)
			);
			const products = response.data.product;
			setTimeout(() => {
				for (let index = 0; index < products?.length; index++) {
					dfMessenger.renderCustomCard([
						{
							type: "image",
							rawUrl: products[index].image[0],
							accessibilityText: products[index].name,
						},
						{
							type: "info",
							title: products[index].name,
							subtitle: products[index].category.join(", "),
							actionLink: console.log("hello"),
						},
						{
							type: "button",
							icon: {
								type: "chevron_right",
								color: "#FF9800",
							},
							text: "Add to cart",
							event: {
								name: "addtocart",
								languageCode: "en-us",
								parameters: {
									name: products[index].name,
								},
							},
						},
					]);
				}
				dfMessenger.renderCustomText(repAfterDisplayProduct[generateNum(0, 2)]);
			}, 1000);
		});
	} else {
		getTopProductHandler().then((response) => {
			const products = response.data.product;
			for (let index = 0; index < products?.length; index++) {
				dfMessenger.renderCustomCard([
					{
						type: "image",
						rawUrl: products[index].image[0],
						accessibilityText: products[index].name,
					},
					{
						type: "info",
						title: products[index].name,
						subtitle: products[index].category.join(", "),
						actionLink: console.log("hello"),
					},
					{
						type: "button",
						icon: {
							type: "chevron_right",
							color: "#FF9800",
						},
						text: "Add to cart",
						event: {
							name: "addtocart",
							languageCode: "en-us",
							parameters: {
								name: products[index].name,
							},
						},
					},
				]);
			}
		});
	}
};

const getTopProductHandler = (conditionParams) => {
	return axios.post(ENP_TOP_PRODUCT(3, 1), [...conditionParams]);
};

const addToCartHandle = (name, dfMessenger) => {
	console.log("HELLO");
	dfMessenger.renderCustomText(`Add ${name} to cart success`);
};
