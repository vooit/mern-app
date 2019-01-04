import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const UsersList = ({users}) => {

    let usersList = users ?
        users.map((user, index) =>
            <li className="user__list-item list-group-item" key={index}><Link
                to={'/users/' + user._id}>{index + 1}. {user.firstName} {user.lastName}</Link></li>
        ) : <span>no results fetched</span>;


    return (
        <ul className="user__list">
            {usersList}
        </ul>
    );
};

UsersList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UsersList;