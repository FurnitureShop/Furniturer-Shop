import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import chatbotReducer from "./chatbotSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    chatbot: chatbotReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});
