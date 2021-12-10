import { useReducer } from 'react';
import { AuthContext } from './authContext';
import reducer from './authReducer';
import * as authServices from '../../services/authServices';
import { TOKEN_KEY_NAME } from '../../config/static.config';

export const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem(TOKEN_KEY_NAME),
    isAuthenticated: false,
    user: null,
    error: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  //login
  const login = async (email, password) => {
    try {
      const user = await authServices.login(email, password);
      dispatch({ type: 'LOGIN', payload: user });
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, token: state.token, login }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
