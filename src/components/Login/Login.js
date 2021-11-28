const Login = () => {
  const formSubmitRegister = () => {

  };
  
  return (
    <div className='ui container'>
      <div className='ui error message'>
        <div className='header'>Action Forbidden</div>
        <p>
          You can only sign up for an account once with a given e-mail address.
        </p>
      </div>
      <h1>Login </h1>
      <form className='ui form' onSubmit={formSubmitRegister}>
        <div className='field'>
          <label>Email</label>
          <input type='email' name='email' placeholder='Email' />
        </div>
        <div className='field'>
          <label>Password</label>
          <input type='password' name='password' placeholder='Password' />
        </div>
        <button className='ui button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
