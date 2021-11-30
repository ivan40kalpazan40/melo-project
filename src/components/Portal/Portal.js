import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context/User/UserContext';
const Portal = () => {
  const [currentUser, setCurrentUser] = useContext(UserContext);
  console.log(`current: `, currentUser);

  return (
    <div className='ui container'>
      <h1>Welcome {currentUser.email} </h1>
    </div>
  );
};

export default Portal;
