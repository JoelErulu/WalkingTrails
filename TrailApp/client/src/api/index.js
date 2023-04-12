import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const fetchUsers = () => API.get('/user/all');
export const googleLogin = (token) => API.post('user/googleLogin', token);

export const fetchTrails = () => API.get('/trails');
export const createTrail = (newTrail) => API.post('/trails', newTrail);
export const updateTrail = (id, updatedTrail) => API.patch(`/trails/${id}`, updatedTrail);
export const deleteTrail = (id) => API.delete(`/trails/${id}`);