const apiUrl = "/api/";
export const toggleAddUser = () => {
    return {
        type: 'TOGGLE_ADD_USER'
    }
}
export const addNewUser = (user) => {
}
export const deleteUser = (user) => {
}
export const editUser = (user) => {
}

export const fetchUsers = () => {


    return (dispatch) => {
        dispatch(fetchUsersRequest());

        return fetch(apiUrl)
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(fetchUsersSuccess(data.users, data.message));
                    })
                }
                else {
                    response.json().then(error => {
                        dispatch(fetchUsersFailed(error));
                    })
                }
            })
    }
}
export const fetchUsersRequest = () => {
    return {
        type: 'FETCH_USERS_REQUEST'
    }
}

export const fetchUsersSuccess = (users, message) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        users: users,
        message: message,
        receivedAt: Date.now
    }
}
export const fetchUsersFailed = (error) => {
    return {
        type: 'FETCH_USER_FAILED',
        error
    }
}
export const fetchUserById = (userId) => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        return fetch(apiUrl + userId)
            .then(response => {
                console.log(response);
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(fetchUserSuccess(data.user[0], data.message));
                    })
                }
                else {
                    response.json().then(error => {
                        dispatch(fetchUserFailed(error));
                    })
                }
            })
    }
}
export const fetchUserRequest = () => {
    return {
        type: 'FETCH_USER_REQUEST'
    }
}

export const fetchUserSuccess = (user, message) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        user: user,
        message: message,
        receivedAt: Date.now
    }
}
export const fetchUserFailed = (error) => {
    return {
        type: 'FETCH_USER_FAILED',
        error
    }
}