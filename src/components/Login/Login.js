const Login = () => {
  return (
    <div className='ui container'>
      <h1>Login </h1>
      <form class='ui form'>
        <div class='field'>
          <label>First Name</label>
          <input type='text' name='first-name' placeholder='First Name' />
        </div>
        <div class='field'>
          <label>Last Name</label>
          <input type='text' name='last-name' placeholder='Last Name' />
        </div>
        <div class='field'>
          <div class='ui checkbox'>
            <input type='checkbox' tabindex='0' class='hidden' />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <div class='ui error message'>
          <div class='header'>Action Forbidden</div>
          <p>
            You can only sign up for an account once with a given e-mail
            address.
          </p>
        </div>
        <button class='ui button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
