import * as types from './actionTypes';
import api from '../api/api';

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}


export function createUserSuccess(user) {
    return {type: types.CREATE_USER_SUCCESS, user}
}

export function createUser(user) {
    return function (dispatch) {
        return api.postUser(user).then(response => {
            dispatch(createUserSuccess(response));
            console.log("createUserSuccess + ", response);
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}