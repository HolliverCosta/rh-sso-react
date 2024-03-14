import React from 'react';
import { KeycloakProvider } from "keycloak-react-web";
import Login from './Login';
import keycloak from './keyclock';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

export default function App() {
  return (
    <KeycloakProvider
      client={keycloak}
      initOptions={{ 
        onLoad: 'check-sso', 
        redirectUri: 'http://localhost:3000/home',

      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<Login />}
            
            />
            <Route
            path="/home"
            exact
            element={<Home />}
            />
        </Routes>
     
      </BrowserRouter>
    </KeycloakProvider>
  );
};