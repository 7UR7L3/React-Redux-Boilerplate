import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

// we combine all reduces together here so that js/index.js doesn't get bogged down by importing all reducers

const allReducers = combineReducers
(
	{
    	users: UserReducer,
    	activeUser: ActiveUserReducer
	}
);

export default allReducers;
