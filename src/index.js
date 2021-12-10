import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { AuthContextProvider } from './context/Auth/AuthContext';
import { AuthState } from './context/Auth/AuthState';
import { AlertContextProvider } from './context/Alert/AlertContext';
import { DataContextProvider } from './context/Data/DataContext';
import { UserContextProvider } from './context/User/UserContext';
import App from './App';
import { ArtistContextProvider } from './context/Artist/ArtistContext';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <AuthState>
        <DataContextProvider>
          <AlertContextProvider>
            <ArtistContextProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ArtistContextProvider>
          </AlertContextProvider>
        </DataContextProvider>
      </AuthState>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
