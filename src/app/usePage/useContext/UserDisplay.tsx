'use client';
import { useContext } from 'react';
import { UserContext } from './context';

const UserDisplay = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <p>{`Name: ${user.name}`}</p>
      <p>{`Age: ${user.age}`}</p>
    </div>
  );
};

export default UserDisplay;
