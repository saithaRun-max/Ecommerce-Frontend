import { createSlice } from "@reduxjs/toolkit";


const productsDataSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addProducts:(state, action) => {
        state.products = action.payload;
    }
  },
});

export const { addProducts } = productsDataSlice.actions;

export default productsDataSlice.reducer;
