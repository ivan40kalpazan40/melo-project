import { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={[isAuth, setIsAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};
