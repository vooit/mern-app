import api from '../api/api';
import {loadUsersSuccess} from './userActions'

export function loadUsers() {
    return function (dispatch) {
        return api.getAllUsers().then(users => {
            console.log(users)
            dispatch(loadUsersSuccess(users));
        }).catch(error => {
            throw(error);
        });
    };
}
