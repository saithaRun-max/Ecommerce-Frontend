import {configureStore} from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";;
import productsDataSliceReducer from "./productsDataSlice";

const appStore = configureStore({
    reducer: {
        cart: cartSliceReducer,
        products :productsDataSliceReducer,

    }
})

export default appStore;

