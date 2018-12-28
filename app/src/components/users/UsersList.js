import React from 'react';

const UsersList = ({users}) => {

    console.log(users)
    return (
        <ul>
            {
                users.map(user =>
                <li className="list-group-item"
                    key={user.id}>
                    {user.firstName}
                </li>)
            }
        </ul>
    );
};

export default UsersList;