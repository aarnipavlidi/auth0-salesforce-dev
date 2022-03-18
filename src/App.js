import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (user && isAuthenticated) {
    return (
    <div className="container d-flex">
      <div>
        <h1>Olet kirjautunut sisään.</h1>
        <button onClick={logout}>Kirjaudu ulos</button>
      </div>
    </div>
    )
  }

  return (
    <div className="container d-flex">
      <div>
        <h1>Kirjaudu Sisään</h1>
        <button onClick={loginWithRedirect}>Login</button>
      </div>
    </div>
  );
};

export default App;