import React from 'react';

const UsersList = ({users}) => {

    console.log(users.users);


    let usersList = users.users ?
        users.users.map((user, index) =>
            <li
                key={index}>
                {user.firstName}, {user.lastName}
            </li>
        ) : <span>no results fetched</span>;


    return (
        <ul>
            {usersList}
        </ul>
    );
};

export default UsersList;