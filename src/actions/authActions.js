import * as api from '../api';
import { authUser } from '../features/auth/authSlice';
import { isLoadingState, isNotLoadingState } from '../features/posts/postSlice';

export const createAuthUser = (newUser) => async (dispatch) => {
  try {
    const { data } = await api.createUser(newUser);
    console.log(data);
    dispatch(authUser(data));
  } catch (error) {
    console.log(error);
  }
};

export const signInUser = (userData) => async (dispatch) => {
  dispatch(isLoadingState());
  try {
    const { data } = await api.signUser(userData);
    // dispatch(authUser(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  dispatch(isNotLoadingState());
};
