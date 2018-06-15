import React from 'react';
import './users.css';
import AppHeader from '../shared/app-header/app-header.component';
import UsersList from './users-list/users-list.component';

const Users = () => (
  <div className="users__container">
    <AppHeader>Users</AppHeader>
    <UsersList />
  </div>
);

export default Users;
