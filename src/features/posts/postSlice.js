import { createSlice } from "@reduxjs/toolkit";

import postsItems from "../../postsItems";

const initialState = {
  postsItems: postsItems,
  test: "okay",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPostItem: (state, action) => {
      return { ...state, postsItems: action.payload };
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
  },
});

export const { increaseLikeCount, decreaseLikeCount, addPostItem } =
  postSlice.actions;

export default postSlice.reducer;
