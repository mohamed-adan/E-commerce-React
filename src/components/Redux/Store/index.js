import { configureStore } from "@reduxjs/toolkit";
import cart from "../reducer/cart";
import { persistReducer } from "redux-persist";

import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const config ={
    key: "root",
    storage 
}

const allreducers = combineReducers({
    
    cart: cart
})

const reducers = persistReducer(config, allreducers)

const store = configureStore({

    reducer: reducers
      
    
})

export default store
