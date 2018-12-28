import api from '../api/api';

export function loadUsers() {
    return function (dispatch) {
        return api.getAllUsers().then(users => {
            dispatch(loadUsersSuccess(users));
        }).catch(error => {
            throw(error);
        });
    };
}
