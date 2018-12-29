import * as types from './actionTypes';
import Api from '../api/api';

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}


export function createUserSuccess(user) {
    return {type: types.CREATE_USER_SUCCESS, user}
}