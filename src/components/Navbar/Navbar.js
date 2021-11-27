import { Link } from 'react-router-dom';
const Navbar = ({ isAuth }) => {
  const loggedNavigation = (
    <div class='ui inverted menu'>
      <div class='header item'>: melo :::</div>
      <Link to='/' class='item'>
        Home
      </Link>
      <a class='item'>Profile</a>
      <a class='item'>Create</a>

      <div class='right menu'>
        <a class='item'>Logout</a>
      </div>
    </div>
  );
  const guestNavigation = (
    <div class='ui inverted menu'>
      <div class='header item'>: melo :::</div>
      <Link to='/' class='item'>
        Home
      </Link>

      <div class='right menu'>
        <Link to='/user/login' class='item'>
          Login
        </Link>
        <Link to='/user/register' class='item'>
          Register
        </Link>
      </div>
    </div>
  );

  return <>{isAuth ? loggedNavigation : guestNavigation}</>;
};

export default Navbar;
