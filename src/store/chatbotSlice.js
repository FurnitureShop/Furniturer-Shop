import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	ENP_CREATE_ORDER_CHATBOT,
	ENP_GET_PRODUCT_BY_LIST_ID,
	ENP_TOP_PRODUCT,
} from "api/EndPoint";
import {
  createOrderSuccess,
	reAskAboutFurniture,
	repAfterDisplayProduct,
	repBeforeDisplayProduct,
	repBeforeFetchMore,
} from "utils/chatbotResponses";
import { generateNum } from "utils/mathUtils";
import { axios } from "../lib/axios/Interceptor";

export const fetchProductFirstTime = createAsyncThunk(
	"chatbot/fetchProduct",
	async (conditionParams, { dispatch }) => {
		dispatch(chatbotSlice.actions.saveFetchParams(conditionParams));
		const response = await axios.post(ENP_TOP_PRODUCT(3, 1), [
			...conditionParams,
		]);
		return response.data;
	}
);

export const fetchMoreProduct = createAsyncThunk(
	"chatbot/fetchMore",
	async (conditionParams, { dispatch, getState }) => {
		const { pagination, lastFetchParams } = getState()?.chatbot;
		if (lastFetchParams) {
			dispatch(chatbotSlice.actions.updatePageIndex(pagination.page + 1));
			const response = await axios.post(
				ENP_TOP_PRODUCT(3, pagination.page + 1),
				[...lastFetchParams]
			);
			return response.data;
		} else {
			dispatch(chatbotSlice.actions.saveFetchParams(conditionParams));
			const response = await axios.post(ENP_TOP_PRODUCT(3, 1), [
				...conditionParams,
			]);
			return response.data;
		}
	}
);

export const displayCart = createAsyncThunk(
	"chatbot/cart",
	async (_, { getState }) => {
		const { cart } = getState()?.chatbot;
		const listID = [];
		for (const key in cart) {
			if (Object.hasOwnProperty.call(cart, key)) {
				listID.push(key);
			}
		}
		const response = await axios.post(ENP_GET_PRODUCT_BY_LIST_ID, { listID });
		return response.data;
	}
);

export const createOrder = createAsyncThunk(
	"chatbot/create-order",
	async (_, { getState }) => {
		const { cart, name, phone, address } = getState()?.chatbot;
		const listID = [];
		const flatCart = [];
		for (const key in cart) {
			if (Object.hasOwnProperty.call(cart, key)) {
				listID.push(key);
				flatCart.push({ product: key, quantity: cart[key] });
			}
		}
		const response = await axios.post(ENP_GET_PRODUCT_BY_LIST_ID, { listID });
		const totalPrice = response.data.products.reduce(
			(lastVal, curVal) => lastVal + cart[curVal._id] * curVal.price,
			0
		);
		const responseOrder = await axios.post(ENP_CREATE_ORDER_CHATBOT, {
			phone: phone,
			address: address,
			products: [...flatCart],
			totalPrice: totalPrice,
			customerName: name,
		});
		return {
			order: responseOrder.data?.newOrderSave,
			products: response.data?.products,
		};
	}
);

export const chatbotSlice = createSlice({
	name: "chatbot",
	initialState: {
		chatbot: null,
		lastFetchParams: null,
		pagination: {
			page: 1,
			pageSize: 3,
		},
		cart: {},
		name: null,
		address: null,
		phone: null,
		cardRender: 0,
	},
	reducers: {
		assignChatbot: (state, action) => {
			state.chatbot = action.payload;
		},
		saveFetchParams: (state, action) => {
			state.lastFetch = action.payload;
		},
		updatePageIndex: (state, action) => {
			state.pagination.page = action.payload;
		},
		addProductToCart: (state, action) => {
			if (state.cart[action.payload]) {
				state.cart[action.payload] += 1;
			} else {
				state.cart[action.payload] = 1;
			}
		},
		decreaseProductFromCart: (state, action) => {
			if (state.cart[action.payload]) {
				if (state.cart[action.payload] <= 1) {
					delete state.cart[action.payload];
				} else state.cart[action.payload] -= 1;
			}
		},
		saveName: (state, action) => {
			state.name = action.payload;
		},
		saveAddress: (state, action) => {
			state.address = action.payload;
		},
		savePhone: (state, action) => {
			state.phone = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProductFirstTime.fulfilled, (state, action) => {
				const chatbot = state.chatbot;
				chatbot.renderCustomText(repBeforeDisplayProduct[generateNum(0, 2)]);
				const products = action.payload.product;
				setTimeout(() => {
					if (products.length === 0) {
						chatbot.renderCustomText(
							"Sorry, we don't have a furniture match your describe"
						);
						chatbot.renderCustomText(reAskAboutFurniture[generateNum(0, 2)]);
					} else {
						for (let index = 0; index < products?.length; index++) {
							chatbot.renderCustomCard([
								{
									type: "image",
									rawUrl: products[index].image[0],
									accessibilityText: products[index].name,
								},
								{
									type: "info",
									title: `${products[index].name}  - $${products[index].price}`,
									subtitle: products[index].category.join(", "),
								},
								{
									type: "button",
									icon: {
										type: "chevron_right",
										color: "#FF9800",
									},
									text: "Product detail",
									event: {
										name: "eNavigateProduct",
										languageCode: "en-us",
										parameters: {
											name: products[index].name,
											id: products[index]._id,
										},
									},
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
											id: products[index]._id,
										},
									},
								},
							]);
						}
						chatbot.renderCustomText(repAfterDisplayProduct[generateNum(0, 2)]);
            chatbot.renderCustomCard([
              {
								type: "chips",
								options: [
									{
										text: "Yes",
									},
									{
										text: "No",
									},
								],
							},
            ])
					}
				}, 1000);
			})
			.addCase(fetchProductFirstTime.rejected, (state) => {
				const chatbot = state.chatbot;
				chatbot.renderCustomText(
					"Sorry, we don't have a furniture match your describe"
				);
				chatbot.renderCustomText(reAskAboutFurniture[generateNum(0, 2)]);
			})
			.addCase(fetchMoreProduct.fulfilled, (state, action) => {
				const chatbot = state.chatbot;
				chatbot.renderCustomText(repBeforeFetchMore[generateNum(0, 2)]);
				const products = action.payload.product;
				setTimeout(() => {
					if (products.length === 0) {
						chatbot.renderCustomText("Sorry, we just reach out of the list");
						chatbot.renderCustomText(reAskAboutFurniture[generateNum(0, 2)]);
					} else {
						for (let index = 0; index < products?.length; index++) {
							chatbot.renderCustomCard([
								{
									type: "image",
									rawUrl: products[index].image[0],
									accessibilityText: products[index].name,
								},
								{
									type: "info",
									title: `${products[index].name}  - $${products[index].price}`,
									subtitle: products[index].category.join(", "),
								},
								{
									type: "button",
									icon: {
										type: "chevron_right",
										color: "#FF9800",
									},
									text: "Product detail",
									event: {
										name: "eNavigateProduct",
										languageCode: "en-us",
										parameters: {
											name: products[index].name,
											id: products[index]._id,
										},
									},
								},
								{
									type: "button",
									icon: {
										type: "chevron_right",
										color: "#FF9800",
									},
									text: "Product detail",
									event: {
										name: "eNavigateProduct",
										languageCode: "en-us",
										parameters: {
											name: products[index].name,
											id: products[index]._id,
										},
									},
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
											id: products[index]._id,
										},
									},
								},
							]);
						}
						chatbot.renderCustomText(repAfterDisplayProduct[generateNum(0, 2)]);
            chatbot.renderCustomCard([
              {
								type: "chips",
								options: [
									{
										text: "Yes",
									},
									{
										text: "No",
									},
								],
							},
            ])
					}
				}, 1000);
			})
			.addCase(fetchMoreProduct.rejected, (state) => {
				const chatbot = state.chatbot;
				chatbot.renderCustomText("Sorry, we just reach out of the list");
				chatbot.renderCustomText(reAskAboutFurniture[generateNum(0, 2)]);
			})
			.addCase(displayCart.fulfilled, (state, action) => {
				const chatbot = state.chatbot;
				const products = action.payload.products;
				const cart = { ...state.cart };
				setTimeout(() => {
					if (products.length === 0) {
						chatbot.renderCustomText("Your cart is empty");
					} else {
						for (let index = 0; index < products?.length; index++) {
							const quantity = cart[products[index]._id];
							chatbot.renderCustomCard([
								{
									type: "info",
									image: {
										src: {
											rawUrl: products[index].image[0],
										},
									},
									title: `${products[index].name}  - $${products[index].price}`,
									subtitle: `Quantity: ${quantity}`,
								},
								{
									type: "button",
									icon: {
										type: "chevron_right",
										color: "#FF9800",
									},
									text: "Increase quantity product",
									event: {
										name: "eIncreaseQuantity",
										languageCode: "en-us",
										parameters: {
											name: products[index].name,
											id: products[index]._id,
										},
									},
								},
								{
									type: "button",
									icon: {
										type: "chevron_right",
										color: "#FF9800",
									},
									text: "Decrease quantity product",
									event: {
										name: "eDecreaseQuantity",
										languageCode: "en-us",
										parameters: {
											name: products[index].name,
											id: products[index]._id,
										},
									},
								},
							]);
						}
						chatbot.renderCustomCard([
							{
								type: "info",
								title: "Click ok if everything is ok",
							},
							{
								type: "chips",
								options: [
									{
										text: "Ok",
									},
									{
										text: "No",
									},
								],
							},
						]);
					}
				}, 1000);
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				const chatbot = state.chatbot;
				const cart = { ...state.cart };
				const products = action.payload.products;
				const order = action.payload.order;
				const productCard = [];
				for (let index = 0; index < products?.length; index++) {
					const quantity = cart[products[index]._id];
					productCard.push({
						type: "info",
						image: {
							src: {
								rawUrl: products[index].image[0],
							},
						},
						title: `${products[index].name}  - $${products[index].price}`,
						subtitle: `Quantity: ${quantity}`,
					});
				}
				chatbot.renderCustomCard([
					{
						type: "description",
						title: `Order id: ${order?._id}`,
						text: [`Name: ${order.customerName}`, `Phone: ${order.phone}`, `Address: ${order.address}`],
					},
          ...productCard,
          {
            type: "info",
						title: `Total price: $${order.totalPrice}`,
          }
				]);
        chatbot.renderCustomText(createOrderSuccess[generateNum(0,2)]);
			});
	},
});

export const selectLastFetch = (state) => state.chatbot.lastFetch;

export const {
	assignChatbot,
	addProductToCart,
	decreaseProductFromCart,
	saveName,
	saveAddress,
	savePhone,
} = chatbotSlice.actions;

export default chatbotSlice.reducer;
