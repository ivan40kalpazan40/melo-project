import { Redirect } from 'react-router-dom';
const Logout = ({ onLogOut }) => {
  onLogOut();
  return <Redirect to='/user/login'></Redirect>;
};

export default Logout;
