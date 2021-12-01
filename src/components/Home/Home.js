import { useContext, useEffect } from 'react';

import { AuthContext } from '../../context/Auth/AuthContext';
import { UserContext } from '../../context/User/UserContext';

import Display from './Display';

const Home = () => {
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [isAuth, setIsAuth] = useContext(AuthContext);

  return (
    <div className='ui container '>
      <h1 className='ui center aligned header'>
        melo
        <div className='sub header'>
          The social network to keep track of your favorite artists and music
        </div>
        <p>{isAuth ? 'Authenticated' : 'Not Autenticated'}</p>
      </h1>
      <Display />
    </div>
  );
};

export default Home;
