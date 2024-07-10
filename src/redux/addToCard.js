import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: JSON.parse(localStorage.getItem("cards")) || [],
  totalPrice: 0,
};

const calculateTotalPrice = (cards) => {
  return cards.reduce((total, product) => total + product.qty * product.price, 0);
};

const cartProductsSlice = createSlice({
  name: "Products in cart",
  initialState,
  reducers: {
    addAllProductsToCart: (state, { payload }) => {
      state.cards = payload;
      state.totalPrice = calculateTotalPrice(state.cards);
      return state;
    },

    addToCart: (state, action) => {
      const item = action.payload;
      const cardProduct = state.cards.findIndex(product => product.id === item.id);
      if (cardProduct === -1) {
        state.cards = [...state.cards, { ...item, qty: 1 }];
      } else {
        state.cards[cardProduct].qty += 1;
      }
      localStorage.setItem("cards", JSON.stringify(state.cards));
      state.totalPrice = calculateTotalPrice(state.cards);
    },

    removeCard: (state, action) => {
      state.cards = state.cards.filter(product => product.id !== action.payload);
      localStorage.setItem("cards", JSON.stringify(state.cards));
      state.totalPrice = calculateTotalPrice(state.cards);
    },

    incrementQuantity: (state, { payload }) => {
      const index = state.cards.findIndex((product) => product.id === payload);
      state.cards[index].qty++;
      localStorage.setItem("cards", JSON.stringify(state.cards));
      state.totalPrice = calculateTotalPrice(state.cards);
    },

    decrementQuantity: (state, { payload }) => {
      const index = state.cards.findIndex((product) => product.id === payload);
      if (state.cards[index].qty > 1) {
        state.cards[index].qty -= 1;
      }
      localStorage.setItem("cards", JSON.stringify(state.cards));
      state.totalPrice = calculateTotalPrice(state.cards);
    },

    itemPrice: (state, { payload }) => {
      const index = state.cards.findIndex((product) => product.id === payload);
      return state.cards[index].qty * state.cards[index].price;
    },
  },
});

export default cartProductsSlice.reducer;

export const {
  addToCart,
  removeCard,
  addAllProductsToCart,
  incrementQuantity,
  decrementQuantity,
  itemPrice,
} = cartProductsSlice.actions;
