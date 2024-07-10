import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: JSON.parse(localStorage.getItem("login")) || {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      const { email, password } = action.payload;
      state.login = { email, password };
      localStorage.setItem("login", JSON.stringify(state.login));
    },
    handleLogout: (state) => {
      state.login = {};
      localStorage.removeItem("login");
    },
  },
});

export default loginSlice.reducer;

export const { handleLogin, handleLogout } = loginSlice.actions;
