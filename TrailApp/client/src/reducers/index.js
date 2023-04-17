import { combineReducers } from "redux";

import posts from './posts';
import auth from './auth';
import trails from './trails';
import markers from './markers'

export default combineReducers({ posts, auth, trails, markers});