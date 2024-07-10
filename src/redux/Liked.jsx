import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  liked: JSON.parse(localStorage.getItem("liked")) || [],
};

const likedProductsSlice = createSlice({
  name: "Liked Products",
  initialState,
  reducers: {


    addLikedProduct: (state, { payload }) => {
    
        state.liked = [ ...state.liked, payload];
        // Update local storage here
      
    },


    handleLiked : (state, action) => {
      const item = action.payload;
      const likedProduct = state.liked.findIndex(product => product.id === item.id);
      if(likedProduct === -1){
        state.liked = [ ...state.liked, item ]
      } else {
        state.liked = state.liked.filter((product) => product.id !== item.id);
      }
       localStorage.setItem("liked", JSON.stringify(state.liked));
    }
  },
});

export default likedProductsSlice.reducer;

export const { handleLiked, addLikedProduct, removeLikedProduct, removeLiked, addAllLikedProducts } =
  likedProductsSlice.actions;

