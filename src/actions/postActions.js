import {
  increaseLikeCount,
  isLoadingState,
  isNotLoadingState,
  getPostItems,
  updatePost,
  editPostItem,
  getPost,
  updatedPost,
  postsItemsBySearch,
  updateDeletedPost,
  addPostItem,
} from '../features/posts/postSlice';
import * as api from '../api';

export const fetchPostsData = () => async (dispatch) => {
  try {
    dispatch(isLoadingState());
    const { data } = await api.getPosts();
    dispatch(getPostItems(data));
    dispatch(isNotLoadingState());
  } catch (error) {
    dispatch(isNotLoadingState());
    console.log(error);
  }
};

export const newPostItem = (newPost) => async (dispatch) => {
  dispatch(isLoadingState());
  try {
    const { data } = await api.createPost(newPost);
    dispatch(addPostItem(data));
  } catch (error) {
    console.log(error.message);
  }
  dispatch(isNotLoadingState());
};

export const editPostItemAction = (post, id) => async (dispatch) => {
  dispatch(isLoadingState());
  try {
    const { data } = await api.editPostItem(post, id);
    dispatch(editPostItem(data));
    dispatch(isNotLoadingState());
  } catch (error) {
    console.log(error);
  }

  dispatch(isNotLoadingState());
};

export const getPostById = (id) => async (dispatch) => {
  try {
    dispatch(isLoadingState());
    const { data } = await api.getPost(id);
    dispatch(getPost(data));
    dispatch(isNotLoadingState());
  } catch (error) {
    console.log(error);

    dispatch(isNotLoadingState());
  }
};

export const commentPost = (comment, id) => async (dispatch) => {
  try {
    const { data } = await api.commentPostItem(comment, id);
    dispatch(getPost(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const getPostsItemSBySearch = (searchTerm) => async (dispatch) => {
  try {
    const { data } = await api.getPostsItemsBySearch(searchTerm);
    dispatch(postsItemsBySearch(data));
  } catch (error) {
    console.log(error);
  }
};

export const likePostItem = (_id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(_id);
    dispatch(updatePost(data));
  } catch (error) {
    console.log(error);
  }
};
export const disLikePostItem = (_id) => async (dispatch) => {
  try {
    const { data } = await api.disLikePost(_id);
    dispatch(updatePost(data));
  } catch (error) {
    console.log(error);
  }
};

export const deletePostItem = (id) => async (dispatch) => {
  try {
    const post = await api.deletePostItem(id);
    if (post) {
      dispatch(updateDeletedPost(id));
    }
  } catch (error) {
    console.log(error);
  }
};
