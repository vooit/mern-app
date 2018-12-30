import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function userReducer(state = initialState.users, action) {
    switch(action.type) {
        case types.LOAD_USERS_SUCCESS:
            return action.users;
        case types.CREATE_USER_SUCCESS:
            // browserHistory.push(`/users/${action.user._id}`);
            return [
                ...state.filter(user => user._id !== action.user._id),
                Object.assign({}, action.user)
            ]
        default:
            return state;
    }
}