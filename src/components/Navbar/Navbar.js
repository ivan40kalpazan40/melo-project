import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/authContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const { user, token } = useContext(AuthContext);
  const loggedNavigation = (
    <div class='ui inverted menu'>
      <div class='header item'>: melo :::</div>
      <Link to='/' class='item'>
        Home
      </Link>
      <Link to='/user/profile' class='item'>
        Profile
      </Link>
      <a class='item'>Create</a>

      <div class='right menu'>
        <Link to='/user/logout' class='item'>
          Logout
        </Link>
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

  return <>{user ? loggedNavigation : guestNavigation}</>;
};

export default Navbar;
