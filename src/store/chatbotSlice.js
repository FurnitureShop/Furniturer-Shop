import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	ENP_GET_PRODUCT,
	ENP_GET_PRODUCT_BY_CATEGORY,
	ENP_TOP_PRODUCT,
} from "api/EndPoint";
import { axios } from "../lib/axios/Interceptor";

export const getProduct = createAsyncThunk("chatbot/getTop", async () => {
	const response = await axios.get(
		process.env.REACT_APP_BACKEND_URL + ENP_TOP_PRODUCT
	);
	return response.data;
});

export const getProductByCategory = createAsyncThunk(
	"product/getProductByCategory",
	async (categoryName) => {
		const response = await axios.get(
			process.env.REACT_APP_BACKEND_URL +
				ENP_GET_PRODUCT_BY_CATEGORY +
				categoryName
		);
		return response.data;
	}
);

export const chatbotSlice = createSlice({
	name: "chatbot",
	initialState: {
		chatbot: null,
		lastFetch: null,
		cart: [],
	},
	reducers: {
		assignChatbot: (state, action) => {
			state.chatbot = action.payload;
		},
		fetchProduct: (state) => {
			state.curUser = null;
		},
	},
});

export const selectLastFetch = (state) => state.chatbot.lastFetch;

export const { assignChatbot } = chatbotSlice.actions;

export default chatbotSlice.reducer;
