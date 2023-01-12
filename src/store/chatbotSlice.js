import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	ENP_TOP_PRODUCT,
} from "api/EndPoint";
import {
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
    dispatch(chatbotSlice.actions.saveFetchParams(conditionParams))
		const response = await axios.post(ENP_TOP_PRODUCT(3, 1), [
			...conditionParams,
		]);
		return response.data;
	}
);

export const fetchMoreProduct = createAsyncThunk(
	"chatbot/fetchMore",
	async (conditionParams, { dispatch, getState }) => {
    const { pagination, lastFetchParams} = getState()?.chatbot;
    if(lastFetchParams) {
      dispatch(chatbotSlice.actions.updatePageIndex(pagination.page + 1));
      const response = await axios.post(ENP_TOP_PRODUCT(3, pagination.page + 1), [
        ...lastFetchParams,
      ]);
      return response.data;
    }
    else {
      dispatch(chatbotSlice.actions.saveFetchParams(conditionParams))
      const response = await axios.post(ENP_TOP_PRODUCT(3, 1), [
        ...conditionParams,
      ]);
      return response.data;
    }
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
	},
	reducers: {
		assignChatbot: (state, action) => {
			state.chatbot = action.payload;
		},
		saveFetchParams: (state, action) => {
			state.lastFetch = action.payload;
		},
    updatePageIndex: (state, action) => {
      state.pagination.page = action.payload
    },
    addProductToCart: (state, action) => {
      if(state.cart[action.payload]) {
        state.cart[action.payload] += 1;
      }
      else {
        state.cart[action.payload] = 1;
      }
    }
	},
	extraReducers: (builder) => {
		builder
    .addCase(fetchProductFirstTime.fulfilled, (state, action) => {
			const chatbot = state.chatbot;
			chatbot.renderCustomText(repBeforeDisplayProduct[generateNum(0, 2)]);
			const products = action.payload.product;
			setTimeout(() => {
        if(products.length === 0) {
          chatbot.renderCustomText("Sorry, we don't have a furniture match your describe");
          chatbot.renderCustomText(reAskAboutFurniture[generateNum(0,2)]);
        }
        else {
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
                  },
                },
              },
            ]);
          }
          chatbot.renderCustomText(repAfterDisplayProduct[generateNum(0, 2)]);
        }
			}, 1000);
		})
    .addCase(fetchProductFirstTime.rejected, (state) => {
      const chatbot = state.chatbot;
      chatbot.renderCustomText("Sorry, we don't have a furniture match your describe");
      chatbot.renderCustomText(reAskAboutFurniture[generateNum(0,2)]);
    })
    .addCase(fetchMoreProduct.fulfilled, (state, action) => {
			const chatbot = state.chatbot;
			chatbot.renderCustomText(repBeforeFetchMore[generateNum(0, 2)]);
			const products = action.payload.product;
			setTimeout(() => {
        if(products.length === 0) {
          chatbot.renderCustomText("Sorry, we just reach out of the list");
          chatbot.renderCustomText(reAskAboutFurniture[generateNum(0,2)]);
        }
        else {
          for (let index = 0; index < products?.length; index++) {
            chatbot.renderCustomCard([
              {
                type: "image",
                rawUrl: products[index].image[0],
                accessibilityText: products[index].name,
              },
              {
                type: "info",
                title: products[index].name - products[index].price,
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
        }
			}, 1000);
		})
    .addCase(fetchMoreProduct.rejected, (state) => {
      const chatbot = state.chatbot;
      chatbot.renderCustomText("Sorry, we just reach out of the list");
      chatbot.renderCustomText(reAskAboutFurniture[generateNum(0,2)]);
    })
	},
});

export const selectLastFetch = (state) => state.chatbot.lastFetch;

export const { assignChatbot, addProductToCart } = chatbotSlice.actions;

export default chatbotSlice.reducer;
