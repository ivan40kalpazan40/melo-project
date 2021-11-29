import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/Auth/AuthContext';
import { AlertContextProvider } from './context/Alert/AlertContext';
import { DataContextProvider } from './context/Data/DataContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <AlertContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AlertContextProvider>
      </DataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
