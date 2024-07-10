import { configureStore } from "@reduxjs/toolkit";
import likedProductsSlice from "./Liked";
import cartProductsSlice from "./addToCard";
import loginSlice from "./login";
import compareProductsSlice from "./Compare";

const store = configureStore({
  reducer: {
    likedProducts: likedProductsSlice,
    login: loginSlice,
    compareProducts: compareProductsSlice,
    cartProducts: cartProductsSlice,
  },
});

const subscribe = store.subscribe(() => {
  console.log(store.getState());
});

export default store;
