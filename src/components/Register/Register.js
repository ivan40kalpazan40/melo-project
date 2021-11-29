import * as authServices from '../../services/authServices';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/Auth/AuthContext';
import { AlertContext } from '../../context/Alert/AlertContext';

const Register = () => {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  const [alert, setAlert] = useContext(AlertContext);
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const history = useHistory();
  const handleOnChange = (e) => {
    setData((oldState) => {
      return { ...oldState, [e.target.name]: e.target.value };
    });
  };

  const submitRegisterForm = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = data;
    // const formData = new FormData(e.currentTarget);
    // const email = formData.get('email');
    // const password = formData.get('password');
    // const confirmPassword = formData.get('confirmPassword');
    authServices
      .register(email, password, confirmPassword)
      .then((user) => {
        console.log(user);
        setIsAuth(true);
        setData({
          email: '',
          password: '',
          confirmPassword: '',
        });
        history.push('/');
      })
      .catch((error) => {
        setIsAuth(false);
        setAlert(`Register ERR:: ${error.message}`);
        e.target.reset();
        setTimeout(() => {
          setAlert('');
        }, 3000);
        //history.push('/user/register');
        console.log(`Register ERR:: ${error.message}`);
      });
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

      <h1>Register </h1>
      <form className='ui form' onSubmit={submitRegisterForm}>
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
        <div className='field'>
          <label>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
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

export default Register;
