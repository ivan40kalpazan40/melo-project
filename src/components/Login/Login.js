import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/Auth/authContext';
import { AlertContext } from '../../context/Alert/AlertContext';
import { UserContext } from '../../context/User/UserContext';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const { user, login, token } = useContext(AuthContext);
  const [alert, setAlert] = useContext(AlertContext);
  const [currentUser, setCurrentUser] = useContext(UserContext);

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
      await login(email, password);
      history.push('/');
    } catch (error) {
      console.log(`LOGIN: `, error);
    }

    setData({ email: '', password: '' });
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
      <form className='ui form' onSubmit={formSubmitLogin} method='POST'>
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
