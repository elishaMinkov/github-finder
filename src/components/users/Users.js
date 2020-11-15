import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spiner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'flex',
  flexWrap: 'warp',
  flexDirection: 'row',
  alignItems:'center'
 
};

export default Users;
