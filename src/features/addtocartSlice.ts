import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../app/types";

type InitialState = {
  cartValue: number;
  cartProductDetails: Product[];
  eachCartQuantity: number;
  totalPrice: number;
  initialAmount: number;
};

const initialState: InitialState = {
  cartValue: 0,
  cartProductDetails: [],
  eachCartQuantity: 1,
  totalPrice: 0,
  initialAmount: 1,
};

const addToCartSlice = createSlice({
  name: "cartValue",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartProductDetails.find(
        (item) => item.id === id
      );
      if (existingItem) {
        state.cartProductDetails;
        existingItem.amount = (existingItem.amount || 1) + 1;
      } else {
        state.cartProductDetails.push(action.payload);
        state.cartValue++;
      }
    },

    addToCartDetails: (state, action) => {
      state.cartProductDetails.push(action.payload);
    },

    addCartQuantity: (state, action) => {
      const { id } = action.payload;
      const cartItem = state.cartProductDetails.find((item) => item.id === id);
      if (cartItem) {
        cartItem.amount = (cartItem.amount || 1) + 1;
      }
    },

    subtractCartQuantity: (state, action) => {
      const { id } = action.payload;
      const cartItem = state.cartProductDetails.find((item) => item.id === id);
      if (cartItem) {
        if (cartItem.amount > 1) {
          cartItem.amount -= 1;
          console.log(cartItem.price);
        }
      }
    },

    calculateTotal: (state) => {
      let totalPrice = 0;
      state.cartProductDetails.forEach((item) => {
        totalPrice += item.amount * item.price;
      });
      state.totalPrice = totalPrice;
    },
  },
});

export default addToCartSlice.reducer;
export const {
  addToCart,
  addCartQuantity,
  subtractCartQuantity,
  calculateTotal,
} = addToCartSlice.actions;
