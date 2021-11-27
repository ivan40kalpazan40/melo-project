import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div class='ui inverted menu'>
      <div class='header item'>: melo :::</div>
      <Link to='/' class='item'>
        Home
      </Link>
      <a class='item'>Jobs</a>
      <a class='item'>Locations</a>

      <div class='right menu'>
        <Link to='/user/login' class='item'>
          Login
        </Link>
        <Link to='/user/register' class='item'>
          Register
        </Link>
        <a class='item'>Logout</a>
      </div>
    </div>
  );
};

export default Navbar;
