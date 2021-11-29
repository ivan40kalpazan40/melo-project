import { Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/Auth/AuthContext';

import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { AlertContextProvider } from './context/Alert/AlertContext';

const App = () => {
  return (
    <AuthContextProvider>
      <AlertContextProvider>
        <div className='wrapper'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/user/login' component={Login} />
            <Route path='/user/register' component={Register} />
          </Switch>

          <Footer />
        </div>
      </AlertContextProvider>
    </AuthContextProvider>
  );
};

export default App;
