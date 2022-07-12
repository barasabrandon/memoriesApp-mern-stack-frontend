import { createSlice } from '@reduxjs/toolkit';
import * as api from '../../api';

const initialState = {
  userDetails: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser: (state, action) => {
      localStorage.setItem(
        'userProfile',
        JSON.stringify({ ...action?.payload })
      );
      state.userDetails = action.payload;
    },
  },
});

export const { authUser } = authSlice.actions;

export default authSlice.reducer;
