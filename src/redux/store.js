import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
})
console.log("STORE", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE", store.getState());
});

export default store;
