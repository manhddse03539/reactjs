import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isLoggedIn: false,
  error: null,
  name: '',
  email: '',
  password: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginPending: (state, { name, email, password }) => {
      state.loading = true;
      state.name = name;
      state.email = email;
      state.password = password;
    },
    loginSucceeded: (state) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.error = '';
    },
    loginFailed: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    logoutFailed: (state) => {
      state.isLoggedIn = false;
      state.error = 'Logout failed';
    },
  },
});

const { reducer, actions } = authSlice;

export const { loginPending, loginSucceeded, loginFailed, logout, logoutFailed } = actions;

export const authData = (state) => state.auth;

export default reducer;
