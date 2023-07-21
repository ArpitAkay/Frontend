import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/CartSlice";
import productReducer from "../slices/ProductSlice";

const Store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
})

export default Store;