import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as authServices from './services/authServices';

import { AuthContext } from './context/Auth/AuthContext';

import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';

const App = () => {
  const [isAuth, setIsAuth] = useContext(AuthContext);

  const onLogOut = async () => {
    try {
      await authServices.logout();
      setIsAuth(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='wrapper'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/user/login' component={Login} />
        <Route path='/user/register' component={Register} />
        <Route
          path='/user/logout'
          render={(props) => {
            return <Logout onLogOut={onLogOut} />;
          }}
        />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
