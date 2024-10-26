import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  const user = useSelector(state => state.users.find(user => user.id === userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>{user.name}'s Details</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserDetails;
