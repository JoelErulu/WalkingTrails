import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const logout = (token) => API.post('user/logout', token);
export const fetchUsers = () => API.get('/user/users');
export const updateUserRole = (id, role) => API.patch(`/user/${id}`, role);
export const googleLogin = (token) => API.post('user/googleLogin', token);

// Trails
export const fetchTrails = () => API.get('/trails');
export const createTrail = (newTrail) => API.post('/trails', newTrail);
export const updateTrail = (id, updatedTrail) => API.patch(`/trails/${id}`, updatedTrail);
export const deleteTrail = (id) => API.delete(`/trails/${id}`);
export const fetchTrailByName = (name) => API.get(`/trails/name/${name}`);

// Markers
export const fetchMarkers = (trailId) => API.get(`/marker?trailId=${trailId}`);
export const createMarker = (newMarker) => API.post('/marker', newMarker);
export const updateMarker = (id, updatedMarker) => API.patch(`/marker/${id}`, updatedMarker);
export const deleteMarker = (id) => API.delete(`/marker/${id}`);

// Nutrition
export const fetchNutrition = () => API.get('/nutrition');
export const createNutrition = (newNutrition) => API.post('/nutrition', newNutrition);
export const updateNutrition = (id, updatedNutrition) => API.patch(`/nutrition/${id}`, updatedNutrition);
export const deleteNutrition = (id) => API.delete(`/nutrition/${id}`);
