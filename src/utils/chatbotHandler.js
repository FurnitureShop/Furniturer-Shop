import { ENP_TOP_PRODUCT } from "api/EndPoint";
import { axios } from "lib/axios/Interceptor";

export default function chatbotHandleMessage(event, dfMessenger) {
	console.log(event);
	const chatbotResponse = event?.detail?.response?.queryResult;
	switch (chatbotResponse?.intent?.displayName) {
		case "iAdvisory":
			advisoryHandler(chatbotResponse, dfMessenger);
			break;
		default:
	}
}

const advisoryHandler = (chatbotResponse, dfMessenger) => {
	const parameters = chatbotResponse.parameters;
	if (parameters.top !== "" && parameters.top.length !== 0) {
		getTopProductHandler(parameters.top).then((response) => {
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
	} else {
		getTopProductHandler().then((response) => {
			console.log(response);
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
