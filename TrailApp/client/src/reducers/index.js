import { combineReducers } from "redux";

import posts from './posts';
import auth from './auth';
import trails from './trails';

export default combineReducers({ posts, auth, trails });