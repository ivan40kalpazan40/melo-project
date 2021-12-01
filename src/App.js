import { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as authServices from './services/authServices';

import { AuthContext } from './context/Auth/AuthContext';
import { UserContext } from './context/User/UserContext';

import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Details from './components/Details';
import Profile from './components/Profile';

const App = () => {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useContext(UserContext);

  useEffect(() => {
    const isUser = localStorage.getItem('user');
    if (Boolean(isUser)) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  });
  const onLogOut = async () => {
    try {
      await authServices.logout();
      setIsAuth(false);
      setCurrentUser({});
      localStorage.clear();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='wrapper'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/artists/:id/details' component={Details} />
        <Route exact path='/user/login' component={Login} />
        <Route exact path='/user/register' component={Register} />

        <Route
          exact
          path='/user/logout'
          render={(props) => {
            return <Logout onLogOut={onLogOut} />;
          }}
        />
        <Route exact path='/user/profile' component={Profile} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
