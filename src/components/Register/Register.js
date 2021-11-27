import * as authServices from '../../services/authServices';

const Register = () => {
  const submitRegisterForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    authServices
      .register(email, password, confirmPassword)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        setTimeout(() => {}, 3000);
        console.log(error.message);
      });
  };

  return (
    <div className='ui container'>
      <div className='ui error message'>
        <div className='header'>Action Forbidden</div>
        <p>Action Forbidden</p>
      </div>

      <h1>Register </h1>
      <form className='ui form' onSubmit={submitRegisterForm}>
        <div className='field'>
          <label>Email</label>
          <input type='email' name='email' placeholder='Email' />
        </div>
        <div className='field'>
          <label>Password</label>
          <input type='password' name='password' placeholder='Password' />
        </div>
        <div className='field'>
          <label>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
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
