import { Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/Auth/AuthContext';

import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <AuthContextProvider>
      <div className='wrapper'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user/login' component={Login} />
          <Route path='/user/register' component={Register} />
        </Switch>

        <Footer />
      </div>
    </AuthContextProvider>
  );
};

export default App;
