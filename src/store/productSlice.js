import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENP_GET_PRODUCT, ENP_GET_PRODUCT_BY_CATEGORY } from "api/EndPoint";
import axios from "axios";
import { data } from "components/Pages/UserPage/Tabs/drawer/mockData";

export const getAllProduct = createAsyncThunk("product/getAll", async () => {
  const response = await axios.get(
    process.env.REACT_APP_BACKEND_URL + ENP_GET_PRODUCT
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

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isError: false,
  },
  reducers: {
    // logout: (state) => {
    //   LocalStorageService.clearToken("auth");
    //   LocalStorageService.clearToken("refresh");
    //   state.curUser = null;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.products = action.payload.product;
    });
    builder.addCase(getProductByCategory.fulfilled, (state, action) => {
      state.products = action.payload.products;
    });
    // .addCase(updateInfo.fulfilled, (state, action) => {
    //   state.curUser = action.payload.user;
    //   state.isLoading = false;
    // })
    // .addCase(changePassword.fulfilled, (state) => {
    //   state.isLoading = false;
    // })
    // .addMatcher(
    //   (action) => action.type.endsWith("/pending"),
    //   (state) => {
    //     state.isError = false;
    //     state.isLoading = true;
    //   }
    // )
    // .addMatcher(
    //   (action) => action.type.endsWith("/rejected"),
    //   (state) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //   }
    // );
  },
});

export const selectProduct = (state) => state.product.products;
// export const selectLoading = (state) => state.user.isLoading;
// export const selectError = (state) => state.user.isError;

// export const { logout } = userSlice.actions;

export default productSlice.reducer;
