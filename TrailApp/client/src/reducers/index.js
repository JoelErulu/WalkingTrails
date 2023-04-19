import { combineReducers } from "redux";

import posts from './posts';
import auth from './auth';
import trails from './trails';
import users from './user';
import markers from './markers'

export default combineReducers({ posts, auth, trails,users, markers});
