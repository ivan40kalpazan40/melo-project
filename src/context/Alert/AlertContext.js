import { createContext, useState } from 'react';

export const AlertContext = createContext();
export const AlertContextProvider = (props) => {
  const [alert, setAlert] = useState('');
  return (
    <AlertContext.Provider value={[alert, setAlert]}>
      {props.children}
    </AlertContext.Provider>
  );
};
