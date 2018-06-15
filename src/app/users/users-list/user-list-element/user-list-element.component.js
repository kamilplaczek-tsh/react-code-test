import React from 'react';
import PropTypes from 'prop-types';
import './user-list-element.css';

const UserListElement = ({ user }) => (
  <div className="user-list-element__container">
    <div className="user-list-element__container__pic">
      <img alt="avatar" src={user.avatar} />
    </div>
    <div className="user-list-element__container__name">{`${user.first_name} ${user.last_name}`}</div>
  </div>
);

UserListElement.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export default UserListElement;
