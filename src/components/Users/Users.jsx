import React from 'react';
import { getUsers } from '../../data/users';
import { NavLink } from 'react-router-dom';

const Users = () => {

  const users = getUsers();

  const mappedUser = (user) => <NavLink to="/users" key={user.id}>{user.name} </NavLink>


  return (
    <div className='container'>
      <h1>Users</h1>
      { users.map(mappedUser) }

    </div>
  );
}

export default Users;
