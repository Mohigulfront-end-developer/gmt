import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compare: JSON.parse(localStorage.getItem("compare")) || [],
};

const compareProductsSlice = createSlice({
  name: "Compare Products",
  initialState,
  reducers: {
    addCompareProduct: (state, { payload }) => {
      state.compare = [...state.compare, payload];
      // Update local storage here
    },

    handleCompare: (state, action) => {
      const item = action.payload;
      const compareProduct = state.compare.findIndex(
        (product) => product.id === item.id
      );
      if (compareProduct === -1) {
        state.compare = [...state.compare, item];
      } else {
        state.compare = state.compare.filter(
          (product) => product.id !== item.id
        );
      }
      localStorage.setItem("compare", JSON.stringify(state.compare));
    },
  },
});

export default compareProductsSlice.reducer;

export const {
  handleCompare,
  addCompareProduct,
  removeCompareProduct,
  removeCompare,
  addAllCompareProducts,
} = compareProductsSlice.actions;
