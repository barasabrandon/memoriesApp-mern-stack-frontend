import { createSlice } from '@reduxjs/toolkit';
import * as api from '../../api';

const initialState = {
  postsItems: [],
  isLoading: false,
  isEditing: false,
  currentPostItemId: '',
  postItem: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    isLoadingState: (state, action) => {
      state.isLoading = true;
    },

    isNotLoadingState: (state, action) => {
      state.isLoading = false;
    },

    getPostItems: (state, action) => {
      state.currentPostItemId = '';
      state.postsItems = action.payload.data;
    },

    postsItemsBySearch: (state, action) => {
      state.postsItems = action.payload.data;
    },

    getPost: (state, action) => {
      state.postItem = action.payload;
    },

    addPostItem: (state, action) => {
      state.postsItems.push(action.payload);
    },

    updatePost: (state, action) => {
      state.postsItems = state.postsItems.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },

    increaseLikeCount: (state, action) => {
      const itemToUpdate = state.postsItems.find(
        (item) => item.id === action.payload.id
      );
      itemToUpdate.likeCount = itemToUpdate.likeCount + 1;
    },
    decreaseLikeCount: (state, action) => {
      const postItem = state.postsItems.find(
        (item) => item.id === action.payload.id
      );
      postItem.likeCount = postItem.likeCount - 1;
    },
    setCurrentPostItemId: (state, action) => {
      state.currentPostItemId = action.payload;
      state.isEditing = true;
    },
    editPostItem: (state, action) => {
      state.isEditing = true;
      state.postsItems = state.postsItems.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.isEditing = false;
    },
    setEditingPost: (state, action) => {
      state.isEditing = true;
    },
    setNotEditingPost: (state, action) => {
      state.isEditing = false;
      state.currentPostItemId = '';
    },
    updateDeletedPost: (state, action) => {
      state.postsItems = state.postsItems.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export const {
  increaseLikeCount,
  decreaseLikeCount,
  addPostItem,
  getPostItems,
  getPostsData,
  isLoadingState,
  isNotLoadingState,
  updatePost,
  setCurrentPostItemId,
  editPostItem,
  setEditingPost,
  setNotEditingPost,
  getPost,
  updatedPost,
  postsItemsBySearch,
  updateDeletedPost,
} = postSlice.actions;

export default postSlice.reducer;
