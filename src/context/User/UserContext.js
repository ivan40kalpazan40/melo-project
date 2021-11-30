import { useState, createContext } from 'react';

export const UserContext = createContext();
export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
