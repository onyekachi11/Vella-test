import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import addToCartReducer from "../features/addtocartSlice";
import selectedReducer from '../features/cartdetailSlice'
import userdetailsReducer from "../features/userdetailSlice";
import { combineReducers } from "@reduxjs/toolkit";
import  storage  from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";


const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const rootReducer = combineReducers({
  cartValue: addToCartReducer,
  cartDetails: selectedReducer,
  userDetails: userdetailsReducer,
  products: productReducer,
});

type RootReducerType = typeof rootReducer;
export type RootStateType = ReturnType<RootReducerType>;

const persistedReducer = persistReducer(persistConfig,rootReducer)


const store = configureStore({
  reducer: {
    persistedReducer:persistedReducer,
  },
});

export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;