import { configureStore } from "@reduxjs/toolkit";
import cart from "../reducer/cart";

const store = configureStore({

    reducer:{
        cart: cart
    }
})

export default store
