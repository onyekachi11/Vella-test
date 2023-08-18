import { createSlice } from "@reduxjs/toolkit";

interface SelectedProductState {
  id: string | null;
  image: string | null;
  amount: number | null;
  title: string | null;
  price: number | null;
}

const initialState: SelectedProductState = {
  id: null,
  image: null,
  amount:  null,
  title: null,
  price: null
};

const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.id = action.payload.id,
      state.image = action.payload.image,
      state.amount = action.payload.amount,
      state.title = action.payload.title,
      state.price = action.payload.price
    },
    
    clearSelectedProduct: (state) => {
      state.id = null;
      state.image = null;
      state.amount = null
      state.title = null
      state.price = null
    },
  },
});

export const { setSelectedProduct, clearSelectedProduct } =
  selectedProductSlice.actions;

export default selectedProductSlice.reducer;
