import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mern-memoriesapp-backend.herokuapp.com/',
});

// baseURL: 'http://localhost:5000',

// POSTS

export const createPost = (newPost) => API.post('/posts', newPost);

export const getPosts = () => API.get('/posts');

export const getPost = (id) => API.get(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/likePost/${id}`);

export const disLikePost = (id) => API.patch(`posts/disLikePostItem/${id}`);

export const editPostItem = (post, id) =>
  API.patch(`posts/editPost/${id}`, post);

export const commentPostItem = (comment, id) =>
  API.post(`posts/commentPost/${id}`, { comment });

export const getPostsItemsBySearch = (searchTerm) =>
  API.get(`posts/searchPosts?searchTerm=${searchTerm || 'none'}`);

export const deletePostItem = (id) => API.delete(`posts/deletePost/${id}`);

// AUTH
export const createUser = (newUser) => API.post(`users/createUser`, newUser);

export const signUser = (userData) => API.post(`users/signInUser`, userData);
