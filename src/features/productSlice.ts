import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../app/types";


type InitialState= {
    loading: boolean
    products: Product[]
    error: string;
    amount: number
}

const initialState: InitialState = {
  loading: false,
  products: [],
  error: "",
  amount: 0
};


export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
     const response = await axios.get("https://fakestoreapi.com/products");
     return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
          (state.loading = false),
          (state.products = action.payload),
          (state.error = "");
          (state.amount = 1)
      }
    );
    builder.addCase(
      fetchProducts.rejected,
      (state, action) => {
          (state.loading = false),
            (state.products = []),
            (state.error = action.error.message || "Some thing went wrong");
      }
    );
  },
});

export default productSlice.reducer
