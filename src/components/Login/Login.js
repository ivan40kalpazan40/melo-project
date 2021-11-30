import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/Auth/AuthContext';
import { AlertContext } from '../../context/Alert/AlertContext';
import * as authServices from '../../services/authServices';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [isAuth, setIsAuth] = useContext(AuthContext);
  const [alert, setAlert] = useContext(AlertContext);

  const history = useHistory();

  const handleOnChange = (e) => {
    setData((oldData) => {
      return { ...oldData, [e.target.name]: e.target.value };
    });
  };

  const formSubmitLogin = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await authServices.login(email, password);
      const user = response.user;
      // console.log(user);
      localStorage.setItem('user', user);
      setIsAuth(true);
      setData({
        email: '',
        password: '',
      });
      history.push('/');
    } catch (error) {
      console.log(`Login ERR:: ${error.message}`);
      localStorage.clear();
      setIsAuth(false);
      setAlert(`Login ERR:: ${error.message}`);
      setTimeout(() => {
        setAlert('');
      }, 3000);
      e.target.reset();
    }
  };

  return (
    <div className='ui container'>
      {alert ? (
        <div className='ui error message'>
          <div className='header'>Action Forbidden</div>
          <p>{alert}</p>
        </div>
      ) : (
        ''
      )}

      <h1>Login </h1>
      <form className='ui form' onSubmit={formSubmitLogin}>
        <div className='field'>
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleOnChange}
          />
        </div>
        <div className='field'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleOnChange}
          />
        </div>
        <button className='ui button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
